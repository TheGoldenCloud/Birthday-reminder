import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Person from './personComponent'
import Perosn1 from "./photos/person1.jpg";
import Perosn2 from "./photos/person2.jpg";
import Perosn3 from "./photos/person3.jpg";
import Perosn4 from "./photos/person4.png";
import Perosn5 from "./photos/person5.png";

function BirthdayCard() {

  //useEffect da loaduje iz endpointa

  let [persons, setPerson] = useState([
    { id: 1, name: 'Lana Rhoades', age: 26, img: Perosn1 },
    { id: 2, name: 'Eva Elfie', age: 24, img: Perosn2 },
    { id: 3, name: 'Sweetie Fox', age: 25, img: Perosn3 },
    { id: 4, name: 'Eva Elfie', age: 27, img: Perosn4 },
    { id: 5, name: 'Sweetie Fox', age: 28, img: Perosn5 }
  ]);

  let [count,setCount] = useState(persons.length)


  let style = {
    card: { 
      position:"absolute",
        left:"50%",
        top:"50%",
        transform:"translate(-50%,-50%)",
        width:"400px",
        padding:"1.5%",
        boxShadow:"0 30px 30px 0 rgba(0, 0, 0, 0.2)"
    },
    button: {
      background:"rgb(255, 128, 128)",
      border:"rgb(255, 128, 128)",
      height:"50xp",
      
    }
  };

  return (
    <React.Fragment>
      <div className="card" style={style.card}>
        <h3> {count} Birthdays today</h3>
        <div className="card-body p-1" >

          { persons.map(p=> <Person key={p.id} name = {p.name} age = {p.age} img = {p.img} />) }
          
        </div>
        <button className="btn btn-primary" style={style.button} onClick = {()=>{setPerson([...persons] = []); setCount(0);}}>Clear all</button>
      </div>
    </React.Fragment>
  );
}

export default BirthdayCard;
