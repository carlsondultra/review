# Game Review Application using PERN stack

How PERN stack is used:

Postgres - Storing list of games and reviews into Postgres Database.

Express - Web framework for node.js.

React.js - Running on the front-end, sending requests to the API to receive data from database.

Node.js - Allows running of Javascript server side.

# Getting Started

```
git clone git@github.com:carlsondultra/review.git
npm install
cd server
npm start
```
On a seperate terminal,
```
cd client
npm install
npm start
```
On a third terminal,
```
cp sample.env .env
```
Ensure your Postgres database is running, then edit .env as necessary.