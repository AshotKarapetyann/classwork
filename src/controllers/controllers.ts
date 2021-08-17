import fs from "fs";
import readline from "readline";
import {Request, Response} from "express";

const controllers = {
        read(req:Request, res:Response){
        const readStream = fs.createReadStream("src/file.txt", "utf-8");
        readStream.on("data", (data) => {
            console.log(data);
            res.send(data);
        })
        readStream.on("error", (err) => {
            console.error(err);
            res.send(err);
        })

    },
    write(req:Request, res:Response){
        const obj:any = {};
        const lineReader = readline.createInterface({
            input: fs.createReadStream("src/file.txt")
        });
    
        lineReader.on("line", line => {
            const splitLine = line.split('=');
            obj[splitLine[0]] = splitLine[1];
        });
        
        lineReader.on("close", () => {
            const writer = fs.createWriteStream("src/test.json/");
            writer.write(JSON.stringify(obj));
            res.send("File Was Created");
            console.log("File Was Created");    
        });

        lineReader.on("error", (err)=>{
            res.send(err);
            console.error(err);
        })
    }
}

export default controllers;