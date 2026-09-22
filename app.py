import os
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

import streamlit as st
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
# Load model
model_path = "model"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForSequenceClassification.from_pretrained(model_path)

st.title("📰 Odia Fake News Detection")

title = st.text_input("News Title")
text = st.text_area("News Content")

if st.button("Predict"):

    sample_text = title + " " + text

    inputs = tokenizer(
        sample_text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=256
    )

    with torch.no_grad():
        outputs = model(**inputs)

    prediction = torch.argmax(outputs.logits, dim=1).item()

    if prediction == 0:
        st.error("Fake News")
    else:
        st.success("Real News")