const { Telegraf } = require("telegraf");
const dotenv = require('dotenv')
dotenv.config({path : "./HungaryBot/config.env"})


const bot = new Telegraf(process.env.BOT_TOKEN);

function MainMenu(ctx) {
  let starterMsg = "Welcome ! Welcome !! Welcome !!!";
  bot.telegram.sendMessage(ctx.chat.id, starterMsg, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "My Baby", callback_data: "courses" },
          { text: "help", callback_data: "help" },
        ],
      ],
    },
  });
}

bot.command("start", (ctx) => {
  MainMenu(ctx);
});

// Main Menu

bot.action("main-menu", (ctx) => {
  ctx.deleteMessage();
  MainMenu(ctx);
});

// Videos & Books

function Premium__Videos_Books(ctx, url1, url2) {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "Premium Courses and Books", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Premium",
            url: url1,
            callback_data: "premium",
          },
          {
            text: "Book",
            url: url2,
            callback_data: "book",
          },
        ],
        [
          { text: "Back to Courses", callback_data: "courses" },
          { text: "Menu", callback_data: "main-menu" },
        ],
      ],
    },
  });
}

// All Courses Bot

bot.action("courses", async (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, "gazab bezzati hain", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "How Internet Works",
            callback_data: "internet",
          },
        ],
        [
          {
            text: "HTML & CSS",
            callback_data: "htmlANDcss",
          },
          {
            text: "Javascript",
            callback_data: "javascript",
          },
        ],
        [
          {
            text: "React.Js",
            callback_data: "reactjs",
          },
          {
            text: "Node.Js",
            callback_data: "nodejs",
          },
          {
            text: "MongoDB",
            callback_data: "monogdb",
          },
        ],
        [
          {
            text: "Main-menu",
            callback_data: "main-menu",
          },
        ],
      ],
    },
  });
});

// * Action Bots

const NotAvailable__ChannelLINK = "https://t.me/+hAnHHaOB3sE4NDA9";

bot.action("internet", (ctx) => {
  const premium__Videos_ChannelLink = "https://t.me/+KMRJ1Idq7j45NWE1";
  const books_ChannelLink = "https://t.me/+plgvpDS3wnFiZjQ9";
  Premium__Videos_Books(ctx, premium__Videos_ChannelLink, books_ChannelLink);
});

bot.action("htmlANDcss", (ctx) => {
  const premium__Videos_ChannelLink = NotAvailable__ChannelLINK;
  const books_ChannelLink = "https://t.me/+mOpsRnPdeOM4MTVl";
  Premium__Videos_Books(ctx, premium__Videos_ChannelLink, books_ChannelLink);
});

bot.action("javascript", (ctx) => {
  const premium__Videos_ChannelLink =
    "https://t.me/thecompletejavascriptcource";
  const books_ChannelLink = "https://t.me/+1-oJNG2S431jYTdl";
  Premium__Videos_Books(ctx, premium__Videos_ChannelLink, books_ChannelLink);
});

bot.action("reactjs", (ctx) => {
  const premium__Videos_ChannelLink = "https://t.me/+_MugMbUhZhozMGVk";
  const books_ChannelLink = NotAvailable__ChannelLINK;
  Premium__Videos_Books(ctx, premium__Videos_ChannelLink, books_ChannelLink);
});

bot.action("nodejs", (ctx) => {
  const premium__Videos_ChannelLink = "https://t.me/TheCompleteBootcamp";
  const books_ChannelLink = NotAvailable__ChannelLINK;
  Premium__Videos_Books(ctx, premium__Videos_ChannelLink, books_ChannelLink);
});

bot.action("monogdb", (ctx) => {
  const premium__Videos_ChannelLink = NotAvailable__ChannelLINK;
  const books_ChannelLink = NotAvailable__ChannelLINK;
  Premium__Videos_Books(ctx, premium__Videos_ChannelLink, books_ChannelLink);
});

bot.launch();
