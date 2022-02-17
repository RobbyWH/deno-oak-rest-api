import { Router } from "https://deno.land/x/oak@v10.2.1/mod.ts";
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
} from "../handlers/user.ts";

export const router = new Router()
  //User routes
  .get("/api/users/:userId", findUser)
  .delete("/api/users/:userId", deleteUser)
  .patch("/api/users", updateUser)
  .post("/api/users", createUser);