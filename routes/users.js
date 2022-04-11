import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    {
        name: "john",
        last: "smith",
        age: 25
    },
    {
        name: "Mary",
        last: "Doe",
        age: 28
    }
]

// all routes are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    console.log('Post route reached');

    const user = req.body;

    const userId = uuidv4();

    users.push(user)

    res.send(`You've added ${user.name} ${user.last} to database!`)
});


export default router