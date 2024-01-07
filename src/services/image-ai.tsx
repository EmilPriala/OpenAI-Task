import axios from 'axios';

const apiKey = 'apiKey';
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
};

// Twitter size: 1024.1024, else: 1792x1024
export const imageRequest = async (prompt, size) =>
    await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
            prompt,
            model: "dall-e-3",
            size,
            style: "vivid"
        },
        {
          headers: headers,
        }
    );