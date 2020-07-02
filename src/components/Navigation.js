import React, { useContext } from 'react'
import { Link  } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalContext'
import './navigation.css'

function Navigation() {
    const { cart } = useContext(GlobalContext);
    return (
        <Nav className="justify-content-center" activeKey="/">
            <Nav.Item>
            <Nav.Link as={Link} to="/"><i class="fa fa-home"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={Link} to="/cart"><i class="fa fa-shopping-cart"></i>({cart.length})</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation
