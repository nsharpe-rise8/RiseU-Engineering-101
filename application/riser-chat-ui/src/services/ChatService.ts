// src/services/ChatService.ts
export class ChatService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

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
}
