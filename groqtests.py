from dotenv import load_dotenv
from groq import Groq
import os
load_dotenv()

api_key = os.getenv('GROQ_API_KEY')

client = Groq(
    api_key=api_key,
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": open("convo.txt","r").read(),
        }
    ],
    model="llama3-8b-8192",
)

print(chat_completion.choices[0].message.content)
