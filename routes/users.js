import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    {
        id: uuidv4(),
        name: "john",
        last: "smith",
        age: 25
    },
    {
        id: uuidv4(),
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
    const userWithId = {...user, id: userId }

    users.push(userWithId)

    res.send(`You've added ${user.name} ${user.last} to database!`)
});


export default router