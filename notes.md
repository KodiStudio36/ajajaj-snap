- npx create-next-app@latest
- 2x yes 1x no 2x yes 1x no
- npm run dev
- npm install @mui/material @emotion/react @emotion/styled
- cd ..
- npm run build
1. Vercel -> Storage:
    Neon -> Create -> Accept -> Region -> Frankfurt, Germany-(fra1) -> Connect
    in snap-zoska-4h-postgres:
    .env.local -> Show secret -> Copy snippet into your src/.env 

2. NextAuth:
    Get started -> Adapters -> Prisma 
    npm install @prisma/client @auth/prisma-adapter
    npm install prisma --save-dev
    npx prisma init

3. VsCode:
    In .env replace value of DATABASE_URL
    .env
    Create prisma.ts in src/app/api/auth/[...nextauth] -> copy code from NextAuth docs
    Update authOptions.ts -> add:   import { PrismaAdapter } from "@auth/prisma-adapter"
                                    import { prisma } from "./prisma"
                                    adapter: PrismaAdapter(prisma),

    package.json:   "build": "prisma generate && next build",
                    "postinstall": "prisma generate"


4. VsCode terminal:
    npx prisma format
    npx prisma migrate dev --name init
    npx prisma generate
    npx prisma studio

Next.js 14.2 App router
authentification: NextAuth
production/deploy server: Vercel
database: PostgreSQL on Vercel
UI: Material UI, Material icons

1. git clone https://github.com/.../your_repo.git
2. cd your_repo
3. git branch -m main
4. git config user.name "your_github_name"
5. git config user.email "your_github_email"
6. git remote -v
7. VsCode Source control -> Initial -> Commit -> Publish branch (Sync)


1. git init
2. git branch -m main
3. git config user.name "your_github_name"
4. git config user.email "your_github_email"
5. git remote add origin https://github.com/.../your_repo.git
6. git remote -v
7. VsCode Source control -> Initial -> Commit -> Publish branch (Sync)