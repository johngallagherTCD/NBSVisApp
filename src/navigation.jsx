import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Row } from 'react-bootstrap';
import TabMenu from './TabMenu';

export default function Navigation() {
    const pathname = window.location.pathname;

    return (
        <Row>
            <Container fluid>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">NB Dashboard</Navbar.Brand>
                            <Nav defaultActiveKey="/" activeKey={pathname}>
                                {/* <Nav.Item>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item> */}
                                <Nav.Link href="https://github.com/johngallagherTCD/NBSVisApp">Github</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div >
                <TabMenu />
            </Container>
        </Row>
    )
}
