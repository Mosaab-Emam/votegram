import { config } from "dotenv";
import { Bot } from "grammy";

config();

// Check for environment variables
if (!process.env.BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => {
  const userId = ctx.message.from.id;
  console.log(userId);
  ctx.reply("Got another message!");
});

bot.start();
