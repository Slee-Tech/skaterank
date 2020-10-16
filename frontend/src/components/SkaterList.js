import React, { useContext, useEffect } from "react";
import { SkaterankContext } from "../SkaterankContext";
import Skater from "./Skater";
import { Spinner } from "react-bootstrap";

export default function SkaterList() {
    const {
        filteredSkaters,
        like,
        dislike,
        sortByFilter,
        isLoading,
        setStance
    } = useContext(SkaterankContext);
    // add some kind of sorting function to the list of skaters, to sort by most likes/dislikes/etc.

    return (
        <div>
            {isLoading ? (
                <div className="d-flex justify-content-center pt-5">
                    <Spinner animation="grow" variant="primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Name</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Dislikes</th>
                            <th scope="col">Total</th>
                            <th scope="col">Like</th>
                            <th scope="col">Dislike</th>
                            <th scope="col">Stance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSkaters.map((skater, index) => {
                            return (
                                <Skater
                                    skater={skater}
                                    like={like}
                                    dislike={dislike}
                                    sortByFilter={sortByFilter}
                                    rank={index + 1}
                                    setStance={setStance}
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}
