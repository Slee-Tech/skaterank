import React, { createContext, useState, useEffect } from "react";

export const SkaterankContext = createContext();

export default function SkaterankContextProvider(props) {
    const [skaters, setSkaters] = useState([
        // {
        //     name: "Mark Appleyard",
        //     id: 1,
        //     likes: 0,
        //     dislikes: 0,
        //     total: 0,
        // },
        // {
        //     name: "Erik Koston",
        //     id: 2,
        //     likes: 0,
        //     dislikes: 0,
        //     total: 0,
        // },
        // {
        //     name: "Jamie Thomas",
        //     id: 3,
        //     likes: 0,
        //     dislikes: 0,
        //     total: 0,
        // },
        // {
        //     name: "Andrew Reynolds",
        //     id: 4,
        //     likes: 0,
        //     dislikes: 0,
        //     total: 0,
        // },
        // {
        //     name: "Tim Huey",
        //     id: 5,
        //     likes: 0,
        //     dislikes: 0,
        //     total: 0,
        // },
    ]); // this can cache list of all skaters first, and pass in a filtered list to child components
    const [filteredSkaters, setFilteredSkaters] = useState(skaters);
    const [query, setQuery] = useState(""); // used in search input
    const [totalVotes, setTotalVotes] = useState(0);
    const [sortBy, setSortBy] = useState("likes");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log("loading...");
        fetch(process.env.REACT_APP_API_URL) //process.env.REACT_APP_API_UR
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSkaters(data);
                setFilteredSkaters(data);
                setIsLoading(false);
                console.log("loaded...");
            });
    }, []); // used to fetch initial skaters
    // maybe add a first useEffect here, to fetch all skaters on load, and call this only if skaters change
    // which should not happen after first api call
    useEffect(() => {
        sortByFilter();
    }, [sortBy, totalVotes, query]);

    const filterByQuery = () => {
        if (query !== "") {
            const queriedSkaters = filteredSkaters.filter((skater) =>
                skater.name.toLowerCase().includes(query)
            ); // does not mutate original skaters array
            //console.log(queriedSkaters);
            //setFilteredSkaters(queriedSkaters);
            return queriedSkaters;
        } else {
            //setFilteredSkaters(skaters);
            return [...skaters];
        }
        //sortByFilter();
    };

    const sortByFilter = () => {
        const sortedSkaters = filterByQuery();
        // sort by likes
        console.log("sorting");
        //const sortedSkaters = [...filteredSkaters];

        if (sortBy === "likes") {
            sortedSkaters.sort((skaterOne, skaterTwo) => {
                return skaterTwo.likes - skaterOne.likes;
            });
        } else if (sortBy === "dislikes") {
            sortedSkaters.sort((skaterOne, skaterTwo) => {
                return skaterTwo.dislikes - skaterOne.dislikes;
            });
        } else {
            sortedSkaters.sort((skaterOne, skaterTwo) => {
                return skaterTwo.total - skaterOne.total;
            });
        }

        setFilteredSkaters(sortedSkaters);
    };

    const like = (skaterID) => {
        //const newSkaters = [...skaters];
        //const skaterLiked = skaters.filter((skater) => skater.id === skaterID);
        const newSkaters = filteredSkaters.map((skater) => {
            if (skater.id !== skaterID) {
                // This isn't the item we care about - keep it as-is
                return skater;
            }
            // Otherwise, this is the one we want - return an updated value
            skater.likes++;
            skater.total++;
            return {
                ...skater,
            };
        });
        setTotalVotes(totalVotes + 1);
        setFilteredSkaters(newSkaters);
        fetch(`${process.env.REACT_APP_API_URL}${skaterID}`, {
            method: "PUT",
            body: JSON.stringify({ opinion: "like" }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return;
            });
    };

    const dislike = (skaterID) => {
        //const newSkaters = [...skaters];
        //const skaterLiked = skaters.filter((skater) => skater.id === skaterID);
        const newSkaters = filteredSkaters.map((skater) => {
            if (skater.id !== skaterID) {
                // This isn't the item we care about - keep it as-is
                return skater;
            }
            // Otherwise, this is the one we want - return an updated value
            skater.dislikes++;
            skater.total++;
            return {
                ...skater,
            };
        });

        setTotalVotes(totalVotes + 1);
        setFilteredSkaters(newSkaters);
        fetch(`${process.env.REACT_APP_API_URL}${skaterID}`, {
            method: "PUT",
            body: JSON.stringify({ opinion: "dislike" }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return;
            });
    };

    const setStance = (skaterID, stance) => {
        const newSkaters = filteredSkaters.map((skater) => {
            if (skater.id !== skaterID) {
                // This isn't the item we care about - keep it as-is
                return skater;
            }
            // Otherwise, this is the one we want - return an updated value
            skater.stance = stance
            return {
                ...skater,
            };
        });
        setFilteredSkaters(newSkaters);
        fetch(`${process.env.REACT_APP_API_URL}${skaterID}/stance`, {
            method: "PATCH",
            body: JSON.stringify({ stance: stance }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return;
            });
        
    };

    

    return (
        <SkaterankContext.Provider
            value={{
                skaters,
                filteredSkaters,
                like,
                dislike,
                sortByFilter,
                setSortBy,
                query,
                setQuery,
                isLoading,
                setStance
            }}
        >
            {props.children}
        </SkaterankContext.Provider>
    );
}
