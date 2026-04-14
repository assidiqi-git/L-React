# Integrasi Tailwind CSS 4.4 dengan Vite + React

## Docs

- https://tailwindcss.com/docs/installation/using-vite

# Components dan Props

## Component

```js
import React from "react";

function Card({ username = "default", post = "tidak ada" }) {
  return (
    <>
      <h1>{username}</h1>
      <h1>{post}</h1>
      <p>lorem...</p>
    </>
  );
}

export default Card;
```

## Penggunaan

```js
import "./App.css";
import Card from "./components/Card";

function App() {
  let newObj = {
    user: "bolobolo",
  };

  let newArr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <h1 className="bg-green-500 text-3xl p-3 rounded-3xl">
        vite with tailwind
      </h1>
      <Card username="user1" />
      <Card username="user2" post="balabu" />
      <Card myObj={newObj} myArr={newArr} />
      <Card />
    </>
  );
}

export default App;
```
