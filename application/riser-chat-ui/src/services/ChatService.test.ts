import { ChatService } from "./ChatService";

describe("ChatService", () => {
  const originalFetch = globalThis.fetch;

  describe("sendMessage", () => {
    const mockServerUrl = "http://test-url.com";
    const mockServerUrlPath = "/openai/chat-completions";

    beforeEach(() => {
      globalThis.fetch = jest.fn();
    });

    afterEach(() => {
      globalThis.fetch = originalFetch;
    });

    it("should sends a message and receives a response successfully", async () => {
      const expectedResponse = "Test response";
      const messagePayload = "Hello, world!";

      jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ response: expectedResponse }),
      } as Response);

      const chatService = new ChatService(mockServerUrl);
      const response = await chatService.sendMessage(messagePayload);

      expect(response).toBe(expectedResponse);
      expect(fetch).toHaveBeenCalledWith(
        `${mockServerUrl}${mockServerUrlPath}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: messagePayload }),
        }
      );
    });
    it("should throw an error if the response is not ok", async () => {
      jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
        ok: false,
      } as Response);

      const chatService = new ChatService(mockServerUrl);

      await expect(chatService.sendMessage("Hello, world!")).rejects.toThrow(
        "Failed to fetch from server"
      );
    });
  });
});
