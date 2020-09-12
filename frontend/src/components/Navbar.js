import React, { useContext } from "react";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Button,
    FormControl,
} from "react-bootstrap";
import { SkaterankContext } from "../SkaterankContext";

export default function NavbarWrapper() {
    const { skaters, like, dislike, query, setQuery } = useContext(
        SkaterankContext
    );
    // add some kind of sorting function to the list of skaters, to sort by most likes/dislikes/etc.
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search for skateboarder..."
                        className="mr-sm-2"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

// {skaters.map((skater) => {
//     return (
//         <div key={skater.id}>
//             <p>
//                 {skater.id} {skater.name}
//             </p>
//             <h1>{skater.likes}</h1>
//             <button onClick={() => like(skater.id)}>Like</button>
//             <h1>{skater.dislikes}</h1>
//             <button onClick={() => dislike(skater.id)}>
//                 Dislike
//             </button>
//             <small>Total Votes: {skater.total}</small>
//         </div>
//     );
// })}

{
    /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                SkateRank
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto"></ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search for skateboarder..."
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav> */
}
