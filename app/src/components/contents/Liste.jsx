import React from 'react';
import { Card, Table, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';


const List = (props) => {
  return (
    <div>
  <h3>Anchors </h3>
      <Card>
        <CardHeader className="bg-info" tag="h3">Monitoring</CardHeader>
        <CardBody>
          <CardTitle > Monitoring</CardTitle>
          <CardText>
          <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Liens </th>
          <th>Remarque</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>express-status-monitor</td>
          <td>https://github.com/RafalWilinski/express-status-monitor</td>
          <td></td>
        </tr>
 
        <tr>
          <th scope="row">1</th>
          <td>systeminformation</td>
          <td>https://github.com/sebhildebrandt/systeminformation</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
          </CardText>
 
        </CardBody>
  
      </Card>


      <Card>
        <CardHeader className="bg-info" tag="h3">Test Js</CardHeader>
        <CardBody>
    
          <CardText>
          <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Liens </th>
          <th>Remarque</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Devskiller test finir implementation </td>
          <td>https://github.com/Devskiller</td>
          <td></td>
        </tr>
 
      </tbody>
    </Table>
          </CardText>
 
        </CardBody>
  
      </Card>



     
    </div>
  );
};

export default List;