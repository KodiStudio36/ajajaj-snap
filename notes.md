# Hugo Foltin; IV.B; 1. skupina

## linux
```ls``` -> listne current directory
```cd``` -> zmeni directory

## npm
```npm run dev``` -> spusti live server pre development mod
```npm run build``` -> buildne projekt
```npm run start``` -> spusti live server buildnuteho projektu

```npx create-next-app@latest``` -> vytvori nextjs projekt
```npm install @mui/material @emotion/react @emotion/styled``` -> nainstaluje material ui

## routing
```c
src
 |- app
    |- nazov_podstranky    // podstranka
    |   |- page.tsx        
    |   |- layout.tsx
    |- page.tsx            // root stranka
    |- layout.tsx          // root layout
```

- v priehladaci zobrazime podstranku routovanim:
   ```localhost:3000/nazov_podstranky```


## nextJS
```<Container>``` = ```<div>```
```<Typography>``` = text, header

- V metadata nastavime nazov a description stranky
   ```export const metadata = { title: "nazov stranky", description: "..."};```


## GitHub
   ```git init``` -> inicializacia lokalneho git repository
   ```git config --global user.name "github meno"``` -> nastavi meno 
   ```git config --global user.email "github email"``` -> nastavi email
   ```git branch -m <meno>```-> premenuje branch
   ```git remote add <meno> <url>```-> nastavi url repository
   ```git remote -v``` -> zobrazi url repository

   ```git add .``` -> prida subory na commit
   ```git commit -m "sprava commitu"``` -> commitne
   ```git push``` -> pushne commit na github
   



