import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ||
});

export async function generateTeamSuggestions(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that helps match people for hackathon teams based on their skills and requirements."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating team suggestions:', error);
    return "Sorry, I couldn't generate team suggestions at this time.";
  }
}