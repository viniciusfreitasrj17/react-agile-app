import React, { useState } from 'react';

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
  
  return (
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
      return (
          <tr key={data.id} >
            <th scope="row"> {data.id} </th>
            <td> {data.releaseName} </td>
            <td> {data.releaseDate} </td>
            <td> <button type="button" className="btn btn-danger btn-sm">Danger</button> </td>
          </tr>
        )
    })}
  </tbody>
  </table>
  );
};

export default Releases;