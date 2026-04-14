# React useState

```js
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter(counter + 1);

    // gunakan callback function untuk menjalankan kode yang identik agar semuanya baris bekerja
    // setCounter((prevCounter) => prevCounter +1);
    // setCounter((prevCounter) => prevCounter +1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <button className="counter" onClick={addValue}>
        Add value
      </button>
      <button className="counter" onClick={removeValue}>
        Remove value
      </button>
    </>
  );
}

export default App;
```
