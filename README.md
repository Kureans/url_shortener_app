# URL Shortener

This is a simple URL Shortener App, made using NestJS backend, React frontend and SQLite DB.

## Prerequisites

Make sure you have the latest version of Node.js installed on your environment.
## Setup

First, clone this repository to your desired directory:
```
git clone --recursive https://github.com/Kureans/url_shortener_app.git
```
Then, open up 2 terminals. In one terminal, go into the backend directory and run the `nest start` command. In the other terminal, go into the frontend directory and run `npm run dev`. 

```bash
# In the first terminal:
cd backend
nest start

# In the second terminal:
cd frontend
npm run dev
```

This should start up `localhost:3000` for the backend and `localhost:5173` for the frontend respectively.

## Assumptions

Users will input valid url links (The only string validation done is to ensure that the input is not empty)
