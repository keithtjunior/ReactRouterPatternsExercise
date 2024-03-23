import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import DogDetails from "./DogDetails";
import DogList from "./DogList";
import './App.css';

const duke = process.env.PUBLIC_URL + "/duke.jpg";
const perry = process.env.PUBLIC_URL + "/perry.jpg";
const whiskey = process.env.PUBLIC_URL + "/whiskey.jpg";
const tubby = process.env.PUBLIC_URL + 
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";

function App({dogs}) {
  const [names, setNames] = useState([]);
  useEffect(() => {
      setNames(dogs.reduce((arr,obj)=> {
        arr.push(obj.name.toLowerCase()); return arr
      },[]));
  }, []);

  return (
    <Routes>
      <Route element={<Nav names={names} />}>
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={dogs} names={names}/>} />
        <Route path="*" element={<Navigate replace to="/dogs" />} />
      </Route>
    </Routes>
  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
