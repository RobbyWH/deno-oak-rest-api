import { Context, helpers } from "https://deno.land/x/oak@v10.2.1/mod.ts";
import type { User } from "../types/user.ts";
import * as db from "../db/index.ts";

export const findUser = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  try {
    const user: User = await db.findUserById(userId);
    ctx.response.body = user;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const createUser = async (ctx: Context) => {
  try {
    const { name, birthDate } = await ctx.request.body().value;
    const createdUser: User = await db.createUser(name, birthDate);
    ctx.response.body = createdUser;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};

export const updateUser = (ctx: Context) => {
  ctx.response.body = { msg: "User updated!" };
};

export const deleteUser = (ctx: Context) => {
  ctx.response.body = { msg: "User deleted!" };
};