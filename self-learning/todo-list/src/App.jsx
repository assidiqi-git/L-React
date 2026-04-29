import Card from "./components/card";
import { useState } from "react";
function App() {
  let list = [];

  function tambahKegiatan() {
    const input = document.getElementById("kegiatan");
    list.push(input.value);
    console.log(list);
  }
  function hapusKegiatan() {}

  return (
    <>
      <div className="justify-center">
        <input type="text" className="input" id="kegiatan" />
        <button className="btn" onClick={tambahKegiatan}>
          Tambah
        </button>
        {list.map((kegiatan, index) => (
          <Card />
        ))}
      </div>
    </>
  );
}

export default App;
