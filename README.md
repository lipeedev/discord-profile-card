# Discord Profile Card
_This is a personal card inspired by Discord's Profile. Shows your info and presence activities on real time._

![image](https://cdn.discordapp.com/attachments/853645264296214581/1022556255887302787/unknown.png)

##

## Table of contents
- [Discord Profile Card](#discord-profile-card)
  - [Table of contents](#table-of-contents)
  - [Setting up](#setting-up)
  - [Installation](#installation)
  - [Scripts](#scripts)
  
##

## Setting up
1. Create a Bot Application in Discord Developer Portal. [see the docs](https://discord.com/developers/docs/intro#bots-and-apps)

2. Add your Bot in a Guild.

3. Go to [My Applications](https://discord.com/developers/applications/), select the Bot and active the [Presence Update intent](https://discord.com/developers/docs/topics/gateway#presence-update)

4. rename the file [.env.example](.env.example) to  `.env` and set the values:

- `VITE_USER_ID` - Your Discord user ID.
- `VITE_GUILD_ID` - The Discord guild ID.
- `VITE_CLIENT_TOKEN` - The Bot TOKEN.

##

## Installation 

1. Enter on the repository folder and install the dependencies

|   Package Manager   |     Command     |
|  :--------          |    :--------:   | 
| `YARN`              | `yarn install`  |
| `NPM`               | `npm install`   |
| `PNPM`              | `pnpm install`  |

## Scripts

- `dev` - Run the project in development mode
- `build` - Create the project build 
- `preview`- Run the preview 



> Running: 

|   Package Manager   |     Command         |
|  :--------          |    :--------:       | 
| `YARN`              | `yarn <script>`     |
| `NPM`               | `npm run <script>`  |
| `PNPM`              | `pnpm run <script>` |