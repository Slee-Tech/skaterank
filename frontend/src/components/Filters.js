import React, { useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { SkaterankContext } from "../SkaterankContext";
export default function Filters() {
    const [isOpen, setIsOpen] = useState(false);
    const { setSortBy } = useContext(SkaterankContext);
    // need to call sort function somewhere after changing
    return (
        <Dropdown className="pt-2 pb-2">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortBy("likes")}>
                    Likes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("dislikes")}>
                    Dislikes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("total")}>
                    Total Votes
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
