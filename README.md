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
- Address responsiveness using a mobile first design
- Invoke date validation by disabling dates in the past
- Give the ability to sort tasks by date both ascending and descending

## Design decisions
- Chose next.js for iteration speed mainly for its out of the box routing using app router.
- Next.js may be a bit overkill here as we don't necessairly need server side rendering or any static generation for this small app.
- Antd design library was used for creating client side components
- Adopted a page/container/component architecture where the page calls a container which handles all the redux state integration. The container will pass date down to components which is most cases are mainly controlled components.
- Redux was used for the purpose of this assignment, with a middleware to persist all the state to localStorage. In reality, this isnt needed. A localStorage hook could simply be used to persist task information, and on load data could be read from there.