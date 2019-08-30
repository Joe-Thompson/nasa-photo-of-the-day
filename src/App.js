import React,{ useEffect, useState} from "react";
import "./App.css";
import  axios from 'axios';
import Title from "./Components/Title";
import Date from "./Components/Date";
import Image from "./Components/Image";
import Explanation from "./Components/Explaination";


function App() {

    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=wHikQ3MOMWVQiowzogrYVtczX0bWdLIhhoSuVaVp")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    },[]);

  return (
    <div className="App">
        <Date date={data.date}/>
        <Title title={data.title}/>
        <Image image={data}/>
        <Explanation explanation={data.explanation}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
