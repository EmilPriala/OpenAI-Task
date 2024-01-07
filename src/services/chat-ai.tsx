import OpenAI from "openai";

const apiKey = 'apiKey';
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const chatRequest = async (content: string) =>
    await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: [{ role: "user", content }],
        stream: true,
    });
    