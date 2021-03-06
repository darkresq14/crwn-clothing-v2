# [Crwn Clothing v2](https://peppy-maamoul-2f70c4.netlify.app)

> Author: Razvan Bielz  
> Date: 23.04.2022 - present

## React Capstone Project
**ZTM (zerotomastery.io) Course:** Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)  
**Instructors:** Andrei Neagoie, Yihua Zhang  

Massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is a full stack app (MERN stack), using Firebase.

## Facts
- SASS
- CSS-in-JS (Styled-Components)
  - Navigation, Button, Cart Dropdown, Directory, Cart Icon, Form Input
- React Router v6 
  - Browser Router
- Firebase v9
  - Authentication
  - Firestore Database
- useContext for User, Categories and Cart with useState and useEffect - Check Commit "[useContext - before implementing Reducers](https://github.com/darkresq14/crwn-clothing-v2/tree/5b3102e8b66aef7f36442b2d1d5952dd107cfc7b)"
- Observer Listener for Authentication
- Hosted on Netlify [here](https://peppy-maamoul-2f70c4.netlify.app)
- useReducer for User & Cart Context - Check Commit "[useReducer - before Redux](https://github.com/darkresq14/crwn-clothing-v2/tree/395ac4d0121dd4ea551e8357f776de59850306c9)"
- Redux + React-Redux + Reselect - Check Commit "[Migrated Cart Context to Redux with Reselect](https://github.com/darkresq14/crwn-clothing-v2/tree/c640018c72ef230a8ef5b44766425643128cf1b9)"
- Redux-Logger + Self-Created Middleware Logger
- Redux-Persist for Cart and Categories
- Redux-Devtools
- Asynchronous Redux
  - Redux-Thunk - Check Commit "[Implemented Redux-Thunk for categories, Spinner for Loading and unpersisted the categories](https://github.com/darkresq14/crwn-clothing-v2/tree/b3adf060b256939501f7c2e02fdaee00d57bdfc0)"
  - Redux-Saga
    - Check Commit "[Converted fetchCategoriesAsync from Thunk to Saga](https://github.com/darkresq14/crwn-clothing-v2/tree/4a2fdcb55608e6604c83039723d253a41a72f676)"
    - Check Commit "[Migrated Check User, Sign In, Sign Up and Sign Out to Sagas](https://github.com/darkresq14/crwn-clothing-v2/tree/3800ddd53822da96c7be0ae2c22340a251a0a388)"
> :warning: **As of 29.04.2022 Stripe does not yet support React 18. I was forced to downgrade to React 17 at this point**
- Stripe
- Serverless Functions
  - Netlify - uses AWS-like Lambda functions
- Converting to Typescript
  - Sagas using typed-redux-saga and babel-plugin-macros
- GraphQL & Apollo Client - "[crwn-clothing-v2-graphql](https://github.com/darkresq14/crwn-clothing-v2-graphql)"
- Performance Optimizations 
  - useCallback & useMemo
  - React Devtools Profiling & React Memo
  - Code Splitting, Dynamic Imports, Suspense & Lazy
- Mobile Support - Responsive Design
- Converting to PWA (Progressive Web App)

## Technologies used

| App                      | Version |
| ------------------------ | ------- |
| nvm                      | 1.1.9   |
| node                     | 18.0.0  |
| npm                      | 8.6.0   |
| yarn                     | 1.22.18 |
| react                    | 18.0.0  |
| react-scripts            | 5.0.1   |
| sass                     | 1.50.1  |
| styled-components        | 5.3.5   |
| react-router-dom         | 6.3.0   |
| firebase                 | 9.6.11  |
| redux                    | 4.2.0   |
| react-redux              | 8.0.1   |
| redux-logger             | 3.0.6   |
| reselect                 | 4.1.5   |
| redux-persist            | 6.0.0   |
| redux-thunk              | 2.4.1   |
| redux-saga               | 1.1.3   |
| -----------------------  | ------- |
| react                    | 17.0.2  |
| react-dom                | 17.0.2  |
| @stripe/react-stripe-js  | 1.7.2   |
| @stripe/stripe-js        | 1.29.0  |
| stripe                   | 8.219.0 |
| dotenv                   | 16.0.0  |
| -----------------------  | ------- |
| typescript               | 4.6.4   |
| @types/jest              | 27.4.1  |
| @types/node              | 17.0.30 |
| @types/react             | 18.0.8  |
| @types/react-dom         | 18.0.3  |
| @types/redux-logger      | 3.0.9   |
| typed-redux-saga         | 1.4.0   |
| babel-plugin-macros      | 3.1.0   |
| @types/styled-components | 5.1.25  |


