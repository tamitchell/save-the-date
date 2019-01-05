import React from "react";
import { Table } from 'reactstrap';

const TravelItenerary = () =>(<Table hover responsive>
        <thead>
          <tr>
            <h2>New Orleans Aug 2019 Travel Itenerary Overview</h2>
          </tr>
        </thead>
        <tbody>
            <h3>Coming Soon!</h3>
            <img src={require("../../img/sax_man.svg")} alt="Man with saxophone" />

            
         {/* <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>)

      export default TravelItenerary