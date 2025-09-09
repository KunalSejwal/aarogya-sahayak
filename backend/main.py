import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

app = FastAPI()

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    user_input = data.get("message", "")
    completion = client.chat.completions.create(
        model="Intelligent-Internet/II-Medical-8B-1706:featherless-ai",
        messages=[
            {
                "role": "user",
                "content": user_input
            }
        ],
    )
    return {"response": completion.choices[0].message.content}