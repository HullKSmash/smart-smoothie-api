import OpenAI from 'openai';

import 'dotenv/config';

const key = process.env.OPENAI_KEY;

const client = new OpenAI({
    apiKey: key,
});

async function getRecipe() {
    const recipe = await client.chat.completions.create({
        messages: [{ role: "system", content: "Give me a tropical smoothie recipe" }],
        model: "gpt-3.5-turbo",
    });

    console.log(recipe.choices[0].message.content);
}

getRecipe();

/** 
app.get("/", (req, res) => {
    res.send("Let's make a smoothie!");
});

app.listen(port, () => {
    console.log(`Smart Smoothie listening at http://localhost:${port}`);
});
*/
