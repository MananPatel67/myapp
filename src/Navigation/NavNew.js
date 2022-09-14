import React from "react";
import { Navbar,NavItem,Nav } from "react-bootstrap";

export default class NavNew extends React.Component {
    render(){
        return(
            <Navbar inverse fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Brand</a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventkey={1} href="#">Hi</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}