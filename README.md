# PDF Question-Answer ChatBot

A web-based chatbot that allows users to upload PDF documents and ask questions, providing AI-powered answers extracted from the uploaded PDFs using **Retrieval-Augmented Generation (RAG)**.

---

## Features

- Upload PDF files and ask questions directly from the document.
- Interactive chat interface with typewriter effect for bot responses.
- **RAG system** using embeddings for accurate document-based answers.
- Supports multiple queries on the same PDF without re-uploading.
- Built with FastAPI, LangChain, HuggingFace models, and Chroma vector database.

---

## Tech Stack

**Frontend:**  
- HTML, Tailwind CSS, JavaScript  

**Backend:**  
- Python, FastAPI, LangChain, HuggingFace Transformers, Chroma, PyPDFLoader  
- Ngrok for exposing local API  
- RAG (Retrieval-Augmented Generation) architecture for document Q&A

---

## Installation

1. Clone the repository:  
```bash
git clone https://github.com/aliusman-32/pdf-RAG-qa-chatbot.git
cd pdf-RAG-qa-chatbot

##Repository Structure
.
├── index.html          # Frontend HTML
├── index.js            # Frontend JavaScript
├── backend.py          # FastAPI backend with AI processing
├── README.md           # Project documentation

