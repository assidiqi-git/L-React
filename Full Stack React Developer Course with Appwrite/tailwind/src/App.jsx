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
