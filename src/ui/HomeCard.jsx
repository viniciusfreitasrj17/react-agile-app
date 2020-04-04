import React from 'react';

const HomeCrad = ({ title, text, action }) => {

  return (
    <div className="col-12 col-sm-4" style={{paddingTop: '7px'}} >
      <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top rounded mx-auto d-block" style={{paddingTop: '5px', width: '100px', height: '100px'}} src="https://static.vecteezy.com/system/resources/previews/000/602/438/non_2x/drawing-graphs-beautiful-line-black-icon-vector.jpg" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title"> {title} </h4>
          <p className="card-text"> {text} </p>
          <button className="btn btn-primary" onClick={action} > {title} </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCrad;