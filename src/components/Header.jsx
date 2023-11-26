import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';



const Header = () => {
    return (
        // <header>
        //     <nav >
        //         <ul >
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/create">Create Post</Link>
        //             </li>
        //             <li>
        //                 <Link to="/update">Update Post</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>

        // <nav className="navbar navbar-expand-lg navbar-light bg-grey border border-2 fs-5">
        //     <a className="navbar-brand" href="/">Bolgger</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="/">Home</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/create">Create Blog</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/update">Update Blog</a>
        //             </li>

        //         </ul>
        //     </div>
        // </nav>

        <div>
            <Navbar className='' bg="primary" data-bs-theme="dark" fixed="top">
                <Container>

                    <Navbar.Brand href='/'><img className='' src='/logo.svg' alt='logo'></img> Blogger</Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link as={Link} to="/create">Create Blog</Nav.Link>
                        <Nav.Link as={Link} to="/update">Manage Blog</Nav.Link>
                        <Nav.Link as={Link} to="/"><img src='user.gif' alt='user'></img></Nav.Link>
                    </Nav>

                </Container>
            </Navbar>

        </div>
    );
};

export default Header;