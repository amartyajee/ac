import React, { useState, useEffect } from 'react';
import './App.css';
import MyCard from "./myCard";
import Grid from "@material-ui/core/Grid";
import Draggable, { DraggableCore } from 'react-draggable';

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log('response', response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])
  return (

    <div>
      <Grid container spacing={24}>
        {
          data.map((item) => <Draggable><Grid item md={4}><MyCard title={item.title} imageSrc={'/images/myImage_' + item.position + '.jpg'} /></Grid></Draggable>)
        }
      </Grid>
    </div>
  );
}

export default App;