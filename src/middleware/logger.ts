import type { Context } from "https://deno.land/x/oak@v10.2.1/mod.ts";

export const logger = async (ctx: Context, next: () => void) => {
  await next();
  const body = await ctx.request.body().value;
  const params = body ? `with params ${JSON.stringify(body)}` : "";
  console.log(`${ctx.request.method} request to ${ctx.request.url} ${params}`);
};