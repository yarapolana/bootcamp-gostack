import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloYara(request: Request, response: Response) {
  const user = createUser({
    name: "Yara",
    email: "yara@yara.is",
    password: "123123",
    techs: ["Yara", "Sua", "Millionaria", { title: "2020", experience: 300 }],
  });

  return response.json({ message: "Typescript Yara" });
}
