import users from "../users/users";
import {Request, Response} from "express";

const controllers = {
    getUsers(req:Request, res:Response){
        res.send(users);
    },
    addUser(req:Request, res:Response){
        const newUser = req.body;
        newUser.id = users.length + 1;
        users.push(newUser);
        res.send(users);
        console.log(users); 
    },
    updateUser(req:Request, res:Response) {
        for (const obj of users) {
            if(obj.id == req.body.id){
                obj.name = req.body.name;
                obj.age = req.body.age;
            }
        }
        res.send(users);
    },

    deleteUser(req:Request, res:Response){
        const id:any = req.params.id;
        users.splice(id-1, 1);
        res.send(users);
    }
};

export default controllers;

