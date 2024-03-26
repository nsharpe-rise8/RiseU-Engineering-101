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

**The Nature of a Unit:** At its core, a unit in software development is akin to a single, self-contained function or method within a class or module. It's designed to perform a specific task, characterized by its inputs and outputs or actions. The beauty of a unit lies in its simplicity and focus—a testament to the single responsibility principle. It doesn't worry about the larger system it's a part of; rather, it concentrates on executing its designated task well, given specific inputs.

**The Purpose of Unit Testing:** Unit testing serves as a microscope under which each unit's behavior is examined and verified. By writing tests for these small, discrete units of code, developers gain a profound understanding of what outputs or behaviors to expect for given inputs. This scrutiny reveals potential uncaught exceptions or inaccuracies in the unit's output, essentially gauging the function's predictability and reliability.

**Integration and Isolation:** One of the hallmarks of well-designed unit tests is the ability to modify or replace a unit without affecting the integrity of other units within the system. This is achievable when units are designed with clear, isolated responsibilities. Well-tested units, when integrated, form a cohesive system where changes are localized, minimizing the risk of unintended side effects across the system.

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

#### 3. Understanding Integration Testing

#### 4. Practicing Integration Testing

#### 5. Understanding E2E Testing

#### 6. Practicing E2E Testing

#### [Additional Steps or Activities as Needed]

### Conclusion

Congratulations on completing Chapter [Number]! You've taken significant steps to [Brief Recap of What the User Has Learned or Achieved].

To finalize this chapter, [Any Final Steps or Actions Users Should Take]:

```bash
[Command Line Instruction]
```

With these [skills, techniques, foundations] in place, you're ready to tackle more advanced topics in upcoming chapters. Continue practicing with these tools to become more comfortable and efficient in your [Relevant Field or Skill]. Happy [coding, designing, etc.], and see you in the next chapter!
