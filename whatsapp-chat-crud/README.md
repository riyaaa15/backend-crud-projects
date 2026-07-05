# WhatsApp Chat CRUD

A WhatsApp-style chat app built with Node.js, Express, MongoDB, Mongoose and EJS templating.

## Features
- View all chats with sender, receiver and timestamp
- Send a new chat message
- Edit an existing message
- Delete a message

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Templating:** EJS
- **Other:** method-override

## Setup

1. Clone the repo
```bash
git clone https://github.com/riyaaa15/whatsapp-chat-crud.git
cd whatsapp-chat-crud
```

2. Install dependencies
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017

4. Run the app
```bash
node index.js
```

5. Open in browser


## Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /chats | Show all chats |
| GET | /chats/new | New chat form |
| POST | /chats | Send new chat |
| GET | /chats/:id/edit | Edit message form |
| PUT | /chats/:id | Update message |
| DELETE | /chats/:id | Delete message |