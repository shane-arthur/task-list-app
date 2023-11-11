This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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


## Stretch Goals/improvements

I time boxed this exercise to 5 hours. In a normal production environment there are numerous other tasks that could be done, such as:

- Creating a different design for the task details page instead of reusing the same task list card component with slightly bigger font.
- Integrate E2E and unit tests.
- Address accessibility.
- Polish up the css by using tokens instead of magic strings for padding/margin values.
- Invoke prettier and linting on commit.
- Address responsiveness using a mobile first design
- Invoke date validation by disabling dates in the past
- Give the ability to sort tasks by date both ascending and descending