# Chapter 5: Testing and Quality Assurance

Welcome to Chapter 5 of RiseU! This chapter dives into essential testing and quality assurance practices in software development. By the end, you'll know how to apply unit, integration, and end-to-end testing methods, embrace Test-Driven Development (TDD), maintain quality test cases, utilize automation tools, and promote continuous improvement for ensuring software excellence.

## Objectives

After completing this chapter, you will be able to:

- Understand software testing levels: Unit, Integration, E2E, and TDD.
- Recognize the value of effective test cases, including Gherkin examples.
- Assess and improve testing skills.
- Apply best practices for quality software delivery.
- Encourage ongoing learning and enhancement in testing practices.

## Getting Started

### Prerequisites

Make sure you have the following set up:

- Riser Chat UI/API setup and configured to run locally
- `Jest` and `React Testing Library` documentation for troubleshooting and further research

### Step-by-Step Instructions

#### 1. Understanding Unit Testing

**Unit Nature:** A unit is a simple, focused function or method in software, designed for a specific task. It follows the single responsibility principle, working independently within a larger system.

**Unit Testing Purpose:** Unit testing examines and verifies a unit's behavior by testing its code against expected outcomes. This helps identify errors and ensures the function's reliability.

**Integration and Isolation:** Effective unit tests allow for safe modifications of individual units without impacting others, thanks to their clear, isolated responsibilities. This leads to a stable, cohesive system with minimal unintended interactions.

#### 2. Practice Unit Testing

Lets start unit testing our application code. We'll start with `riser-chat-ui`, specifically creating tests around the ChatService class.

This class has one method `sendMessage`, and one property `baseUrl`. Lets focus on `sendMessage` and ensure it uses baseUrl properly.

```typescript
async sendMessage(prompt: string): Promise<string> {
    const response = await fetch(`${this.baseUrl}/openai/chat-completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from server");
    }

    const data = await response.json();
    return data.response;
  }
```

Looking at the code, we need to start by mocking out external dependancies - again, we're only concerned with the behavior of this unit, and not any external units which we use. We can do so by using `jest.spyOn` like so:

```typescript
jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
  // This can be toggled (true/false) for success and error cases.
  ok: true,
  // This can be used to return a mock value from the server.
  json: () => Promise.resolve({ response: "response payload" }),
} as Response);
```

**Importantly** - the mock return matches the shape of our usage of the fetch request.

```typescript
const data = await response.json();
return data.response;
```

Lastly, we need to setup jest to mock and clear mock after each test run, so we can make assertions against the mock without leaking values between tests.

```typescript
beforeEach(() => {
  globalThis.fetch = jest.fn();
});

afterEach(() => {
  globalThis.fetch = originalFetch;
});
```

Continueing on with implementing tests now that our mocking is in place, we're calling fetch against our `baseUrl`, and a hardcoded `path`, and expecting a `response` back. So in our test, we're going to want to assert against that.

Lets start by setting up some test fixtures/constants. This will help us test consistent values as needed, and reduce headaches by using the same variable when possible. Breaking this pattern is called using magic strings/numbers/objects, which means you'll need to refactor the same value in multiple areas.

Here's an example of proper fixtures, and assertions:

```typescript
// Used in multiple tests
const mockServerUrl = "http://test-url.com";
const mockServerUrlPath = "/openai/chat-completions";

it("should sends a message successfully", async () => {
  // Used in this single test
  const expectedResponse = "Test response";
  const messagePayload = "Hello, world!";

  jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ response: expectedResponse }),
  } as Response);

  const chatService = new ChatService(mockServerUrl);
  await chatService.sendMessage(messagePayload);

  // Called with the correct values
  expect(fetch).toHaveBeenCalledWith(`${mockServerUrl}${mockServerUrlPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: messagePayload }),
  });
});
```

Lastly, lets make sure it throws an error when we recieve a bad response:

```typescript
it("should throw an error if the response is not ok", async () => {
  jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: false,
  } as Response);

  const chatService = new ChatService(mockServerUrl);

  await expect(
    chatService.sendMessage("no need to assert agains the payload")
  ).rejects.toThrow(
    // Error message from the service
    "Failed to fetch from server"
  );
});
```

Lastly, please review the unit tests provided in the following files for some additional reference material.

- `src/services/ChatService.test.ts`
- `src/App.test.tsx`
- `src/components/ChatMessage.test.tsx`
- `src/components/ChatInterface.test.tsx`

---

#### 3. Understanding Integration Testing

Integration testing focuses on the interactions between different parts of the application, ensuring they work together as expected, without necessarily involving external dependencies like a live backend or third-party services.

Lets use an example:

```typescript
const MessageDisplay = (messages: Message[]) => {
  // Display logic here
};

class OpenAIService {
  private key: string;
  private rateLimit: number;

  constructor(key: string) {
    this.key = key;
    this.rateLimit = 0;
  }

  async sendMessage(message: Message): Promise<void> {
    // Send message logic, including error handling
  }

  async retrieveRateLimit(): Promise<number> {
    // Retrieve current rate limit logic, including error handling
  }

  setRateLimit(newRateLimit: number): void {
    this.rateLimit = newRateLimit;
  }
}

class MessageService {
  static formatMessage(message: Message): Message {
    // Format message logic
  }

  static validateMessage(message: Message): boolean {
    // Validate message logic
  }
}
```

**Message Display Component:** Displays messages to users without altering their content. It focuses exclusively on presentation, ensuring clear communication.

**API Call Handler Service:** Facilitates all interactions with the OpenAI API, including message transmission and response collection, while managing network and rate limit errors.

**Message Service:** Prepares messages for the Message Display component by formatting and validating them, ensuring they meet UX/UI requirements.

A simple, illustrative example can highlight the the value in integration testing and avoiding potential pitfalls of relying solely on unit testing:

### Example Scenario: Incorrect Message Format Handling

Suppose each component/service in your application has passed all unit tests successfully:

- **Message Service** correctly formats and validates messages.
- **API Call Handler Service** efficiently communicates with the OpenAI API, sending messages and receiving responses.
- **Message Display Component** effectively displays messages to users.

However, without integration testing, a critical issue might go unnoticed:

**Scenario**: The `MessageService` formats messages in a specific structure expecting a `string` format, but the `MessageDisplay` component is designed to display messages in an `object` format with properties `text` and `timestamp`. Even though both components work flawlessly in isolation (as proven by their unit tests), the application fails when an actual message flows through the system. Users end up seeing a blank screen or an error message instead of the formatted text because the `MessageDisplay` cannot interpret the `MessageService`'s output correctly.

### Practical Integration Test Value:

This scenario underlines the value of integration testing by ensuring that:

- The formatted message from the `MessageService` is in a compatible structure for the `MessageDisplay` component.
- The entire flow from message receipt, formatting, validation, to display works as a cohesive unit, reflecting real-world usage.

Without integration testing, such mismatches between components, despite their individual unit tests passing, can lead to a flawed user experience and potentially costly fixes post-deployment. Integration testing bridges the gap between unit testing and real-world application usage, catching issues that arise from the interaction between different parts of the system.

#### 4. Practicing Integration Testing

For the practical portion of integration testing, lets look at testing our chat interface.

Starting with the inputs for `ChatInterface`, we can see it consumes the `ChatService`.

```typescript
function ChatInterface({ chatService }: { chatService: ChatService });
```

And as you remember from unit testing, we had to mock fetch when testing `ChatService`.

```typescript
jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
  ok: true,
  json: () => Promise.resolve({ response: "mock server response" }),
} as Response);
```

which will resolve this call here:

```typescript
await fetch(`${this.baseUrl}/openai/chat-completions`, {
  // More fetch options here
});

// Error handling

const data = await response.json();
return data.response;
```

If we look at ChatInterface, we can see the usage of the service in our `handleSendMessage` method:

```typescript
const handleSendMessage = async () => {
  // Error and loading logic...
  const assistantReply = await chatService.sendMessage(userInput);
  setChatHistory([
    ...chatHistory,
    `User: ${userInput}`,
    `Assistant: ${assistantReply}`,
  ]);
  // Additional error and loading logic...
};
```

We can see that we instantiate a vairable `assistantReply` with the return value from `chatService.sendMessage`, and we set state with `assistantReply` (note that this could be enhanced with better programming practices, which we'll get to in the `Coding Patterns` chapter later in the course).

Now that we understand our mocking, let's get to actually testing ChatInterface with full integration. Lets start by creating an integration test file for the ChatInterface called `ChatInterface.integration.test.tsx`.

Fortunately, we can copy most of our old unit tests, and just make some modifications to our mocking strategy.

Here's some examples of code which we'll remove from `ChatInterface.test.tsx`

We'll remove the ChatHistory mock:

```typescript
// ChatInterface.test.tsx
jest.mock("./ChatHistory", () => {
  return ({ chatHistory }: { chatHistory: string[] }) => (
    <div data-testid="chat-history">Mock: {JSON.stringify(chatHistory)}</div>
  );
});
```

and remove the `mockResolvedValue` functions and `mockSendMessage` assertions as shown below:

```typescript
it("pressing enter sends the message", async () => {
  mockSendMessage.mockResolvedValue("Test reply"); // Remove
  const { getByLabelText, findByText } = render(
    <ChatInterface chatService={mockChatService} />
  );
  const input = getByLabelText(/enter your message/i);
  fireEvent.change(input, { target: { value: "Hello, test!" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

  const assistantReply = await findByText(/Assistant: Test reply/i);

  expect(assistantReply).toBeInTheDocument();
  expect(mockSendMessage).toHaveBeenCalledWith("Hello, test!"); // Remove
});
```

Now lets setup the real chat service and consume it like so:

```typescript
describe("ChatInterface - Integration", () => {
  const mockServerUrl = "http://test-url.com";
  const chatService = new ChatService(mockServerUrl);

  // Tests below...
});
```

and create our fetch mock:

```typescript
describe("ChatInterface - Integration", () => {
  const mockServerUrl = "http://test-url.com";
  const chatService = new ChatService(mockServerUrl);
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    globalThis.fetch = jest.fn();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });
});
```

and now refactor our tests to assert against the mock server return values:

```typescript
it("sends a message when the send button is clicked", async () => {
  const expectedResponse = "Test response";
  const messagePayload = "Hello, world!";
  jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    ok: true,
    json: () => Promise.resolve({ response: expectedResponse }),
  } as Response);

  const { getByText, getByLabelText, findByText } = render(
    <ChatInterface chatService={chatService} />
  );
  const input = getByLabelText(/enter your message/i);
  fireEvent.change(input, { target: { value: messagePayload } });
  fireEvent.click(getByText(/send/i));

  const assistantReply = await findByText(`Assistant: ${expectedResponse}`);
  expect(assistantReply).toBeInTheDocument();
});
```

As you can see, integration tests provide value as you know your modules work together, and we can refactor this `ChatInterface` component with ease knowing it's expected behavior will continue working. Lastly, they're easier to write when you have full unit test suites.

#### 5. Understanding E2E Testing

#### 6. Practicing E2E Testing

### Conclusion

Congratulations on completing Chapter [Number]! You've taken significant steps to [Brief Recap of What the User Has Learned or Achieved].

To finalize this chapter, [Any Final Steps or Actions Users Should Take]:

```bash
[Command Line Instruction]
```

With these [skills, techniques, foundations] in place, you're ready to tackle more advanced topics in upcoming chapters. Continue practicing with these tools to become more comfortable and efficient in your [Relevant Field or Skill]. Happy [coding, designing, etc.], and see you in the next chapter!
