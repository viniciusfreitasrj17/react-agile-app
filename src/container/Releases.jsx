import React, { useState } from 'react';

import ReleaseForm from '../ui/ReleaseForm';

const Releases = () => {
  let [releases, setReleases] = useState([{
    id: 1,
    releaseName: 'Release 01',
    releaseDate: '01/01/2017'
  }, {
    id: 2,
    releaseName: 'Release 02',
    releaseDate: '01/01/2018'
  }, {
    id: 3,
    releaseName: 'Release 03',
    releaseDate: '01/01/2019'
  }, {
    id: 4,
    releaseName: 'Release 04',
    releaseDate: '01/01/2020'
  }]);

  const handleSubmit = (e, {name, date}) => {
    e.preventDefault();
    
    const myRelease = {
      id: releases.length + 1,
      releaseName: name,
      releaseDate: date
    };

    setReleases( releases = releases.concat(myRelease) );
  };

  const deleteItem = (e, index) => {
    e.preventDefault();

    let myRelease = releases;
    delete myRelease.splice(index, 1)
    setReleases( myRelease );
    console.log({
      releases,
      myRelease
    })
  };
  
  return (
  <div className='container' style={{paddingTop: '25px'}} >
  <ReleaseForm submitHandler={handleSubmit} />
  <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Release Name</th>
      <th scope="col">Release Date</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {releases.map((data, index) => {
      const clickDelete = (e) => {
        deleteItem(e, index);
      }
      return (
          <tr key={data.id} >
            <th scope="row"> {data.id} </th>
            <td> {data.releaseName} </td>
            <td> {data.releaseDate} </td>
            <td> <button type="button" className="btn btn-danger btn-sm" onClick={clickDelete} >Remover</button> </td>
          </tr>
        )
    })}
  </tbody>
  </table>
  </div>
  );
};

export default Releases;