import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import style from "./still.module.css";

function Person({ img, age, name }) {

  return (
    <div className="row my-2">
      <div className="col-2">
        <div className={style.box}>
          <div className={style.h11}>
            <img src={img} width="90" />
          </div>
          <div className={style.h12}>
            <strong>{name}</strong>
            <br />
            {age} year old
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
