import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './../../App.css';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
    
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Composant</ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/Select">select 3 update</NavLink></ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Graphique</ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/chart/reactchart">batton</NavLink></ListGroupItem>
        </ListGroup>

      </div>
    );
  }
}