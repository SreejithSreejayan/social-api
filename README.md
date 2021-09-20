# Social API

## Description
A REST API built with Express, Mongoose, and MongoDB.

## Usage
1. Make sure you have MongoDB installed on your machine or use [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/)
2. Clone the repo
3. Copy the mongoDB url to .env as "DB_URL=**{your DB url goes here}**"
4. Install dependencies with `npm -i`
5. Run `npm start` to run the server and make the API live
6. Use tools like [Postman](https://www.postman.com/) [Insomnia](https://insomnia.rest/) to test the REST API.

## Models
- User
- Post

## Endpoints
**Auth**
- Register:       `POST /api/auth/register`
- Login:          `POST /api/auth/login`

**User**
- Update User:          `PUT /api/users/:id`

**Post**

## Packages
- express
- mongoose
- dotenv
- nodemon
- helmet
- morgan

## Questions
If you have questions, email me at [ssjksreejith@gmail.com](mailto:ssjksreejith@gmail.com) or reach out on [GitHub](https://www.github.com/sreejithsreejayan).