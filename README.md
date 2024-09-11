## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building docker image and runing

To build a docker image first need to production build with the command

```bash
pnpm build

# or

npm build
```

After the production build, use docker compose to build and run the image with the command

```bash
docker compose up --build -d
```
