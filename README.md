# Prerequisites

- [NodeJs](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
  - Expected node: >=22.12.0

```
$ nvm install 22.12.0
$ nvm use 22.12.0
```

- [Yarn](https://yarnpkg.com/) - Yarn package manager

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Learn more

- [Learn React Router](https://reactrouter.com/start/declarative/installation)
- [Learn tailwindcss](https://tailwindcss.com/docs/installation/using-vite)
- [Learn Formik](https://formik.org/docs/overview)
- [Learn Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Learn Fake REST API](https://dummyjson.com)
