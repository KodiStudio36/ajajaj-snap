Samuel Chudy IV.B 1.Skup.

# Next-Js Notes

## Prepare project

`npm install @mui/material @emotion/react @emotion/styled` - install dependencies
`npx create-next-app@latest` - create a next-js project

## Building project

`npm run dev` - run server in dev mode
`npm run build` - compile project
`npm run start` - run from build

## Imports

`import { Typography, Container } from "@mui/material";` - importing whole material dir, but using just Typgoraphy and Container
`import Autocomplete from '@mui/material/Autocomplete';` - import just Autocomplete (full path import)

## Routing

- Every directory under "**app**" (directory) is separate sub-page and use it's own "**page.tsx**".
- Predefined files
	- page.tsx
	- layout.tsx
	- not_found.tsx

## Components

- **Typography** - text widget
- **Container** - container widget (div)
- Autocomplete - combo box

# Git

## set github user

`git config --global user.name "<name>"`
`git config --global user.email "<email>"`

## init github repository

`git init`
`git remote add <repository url>`
`git remote -v`

## push changes

`git add .`
`git commit -m "<commit message>"`
`git push origin main`

# Terminal

`cd` - change directory
`cd ..` - relative path to directory behind
`cd /` - root directory
`cd ~` - relative home directory
`ls` - list directory
`pwd` - print working directory
`mkdir <name>` - make direcotry
`touch <name>` - create file
