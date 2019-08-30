import React,{ useEffect, useState} from "react";
import "./App.css";
import  axios from 'axios';
import Image from "./Components/Image";
import Explanation from "./Components/Explaination";
import Jumbo from "./Components/JumboTron";
import styled from "styled-components";


function App() {

    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=wHikQ3MOMWVQiowzogrYVtczX0bWdLIhhoSuVaVp")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    },[]);

    const Background = styled.div`
        background-color: #005cb3;
    `;

  return (
    <Background className="App">
        <Jumbo copyright={data.copyright}
                    title={data.title}
                    date={data.date}
        />
        <Image image={data}/>
        <Explanation explanation={data.explanation}/>
    </Background>
  );
}

export default App;
