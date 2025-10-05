# 🎵 Spotify Pop vs Non-Pop Song Classifier

Can a computer guess whether a song is **Pop** or **Not Pop** based on its musical features?  
This project builds a simple **binary classification model** using Spotify audio data to explore how energy, danceability, and valence shape the feel of modern music.

---

## 🧠 Project Overview

We use the [Spotify Tracks Genre Dataset](https://www.kaggle.com/datasets/thedevastator/spotify-tracks-genre-dataset) from Kaggle to train a machine learning model that predicts whether a song belongs to the **Pop** genre.

Each song comes with musical attributes extracted from Spotify’s API — such as:
- `danceability`
- `energy`
- `loudness`
- `tempo`
- `valence` *(musical happiness)*

The model learns patterns in these features to classify songs as:
- **1 → Pop**
- **0 → Non-Pop**

---

## 🧩 Learning Goals

This is a great beginner project to understand:
- Binary classification workflow in machine learning  
- Feature scaling and preprocessing  
- Model training and evaluation (Random Forest, Logistic Regression, etc.)  
- Feature importance and interpretability  
- Writing simple, clear explanations of results (ELI5-style)

---

## 🗂️ Dataset

**Source:** [Spotify Tracks Genre Dataset – Kaggle](https://www.kaggle.com/datasets/thedevastator/spotify-tracks-genre-dataset)
