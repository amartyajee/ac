import React, { useState, useEffect } from 'react';
import './App.css';
import MyCard from "./myCard";
import Grid from "@material-ui/core/Grid";
import Draggable, { DraggableCore } from 'react-draggable';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (type) => {
    setOpen(true);
    setSelected(type);
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '100%',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center'
    },
  }));

  const classes = useStyles();

  const modalBody = (
    <div className={classes.paper}>
      <img src={`/images/${selected}.jpg`} width="60%" />
    </div>
  );

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    ).then(function (response) {
      return response.json();
    }).then(function (myJson) {
      console.log('myJson =>' + myJson);
      setData(myJson)
    });
  }

  useEffect(() => { getData() }, [])

  return (
    <div>
      <Grid container spacing={24}>
        {
          data.map((item) =>
            <Draggable>
              <Grid item md={4}>
                <MyCard title={item.title} imageSrc={`/images/${item.type}.jpg`} onClick={() => onClick(item.type)} />
              </Grid>
            </Draggable>
          )}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {modalBody}
      </Modal>
    </div>
  );
}

export default App;