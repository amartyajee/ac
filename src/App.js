import React, { useState, useEffect } from 'react';
import './App.css';
import MyCard from "./myCard";
import Grid from "@material-ui/core/Grid";
import Draggable, { DraggableCore } from 'react-draggable';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  // fetching data from json file
  const [data, setData] = useState([]);
  // opening and closing modal
  const [open, setOpen] = useState(false);
  // setting current item type, and displaying the same image in modal
  const [selected, setSelected] = useState('');

  // handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  // on clicking on card, open modal and also set the current item type
  const onClick = (type) => {
    setOpen(true);
    setSelected(type);
  }

  // styles for modal
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

  // modal body - using same image
  const modalBody = (
    <div className={classes.paper}>
      <img src={`/images/${selected}.jpg`} width="60%" />
    </div>
  );

  // method to fetch data from local json file
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