# hangman

A word guessing game:
[https://en.wikipedia.org/wiki/Hangman\_(game)](<https://en.wikipedia.org/wiki/Hangman_(game)>)

## Developing

Download and install:

```bash
git clone https://github.com/zqianem/sesl1-level3-hangman-game.git
npm install
```

Get the project URL and service role API key from [Supabase](https://app.supabase.com/project/ejyhdjdsexqnttkydvve/settings/api) and add them to `.env`:

```bash
cp .env.example .env
```

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version this app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
