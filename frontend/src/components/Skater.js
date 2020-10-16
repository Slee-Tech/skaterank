import React from "react";

export default function Skater(props) {
    const { skater, like, dislike, rank, setStance } = props;

    const handleLike = (skaterID) => {
        props.like(skaterID);
        //props.sortByFilter();
    };
    return (
        <tr key={skater.id}>
            <th scope="row">{rank}</th>
            <td>{skater.name}</td>
            <td>{skater.likes}</td>
            <td>{skater.dislikes}</td>
            <td>{skater.total}</td>
            <td>
                <i
                    onClick={() => handleLike(skater.id)}
                    class="fas like-btn fa-thumbs-up"
                ></i>
            </td>
            <td>
                <i
                    onClick={() => props.dislike(skater.id)}
                    class="fas dislike-btn fa-thumbs-down"
                ></i>
            </td>
            <td>{skater.stance}</td>
            <td>
                <button className="btn btn-primary"
                    onClick={() => setStance(skater.id, "goofy")}
                    
                >Goofy</button>
                <button className="btn btn-danger"
                    onClick={() => setStance(skater.id, "regular")}
                    
                >Regular</button>
            
            </td>
        </tr>
    );
}

{
    // onClick={() => props.like(skater.id)}
    /* <div key={skater.id}>
            <p>
                {skater.id} {skater.name}
            </p>
            <h1>{skater.likes}</h1>
            <button onClick={() => props.like(skater.id)}>Like</button>
            <h1>{skater.dislikes}</h1>
            <button onClick={() => props.dislike(skater.id)}>Dislike</button>
            <small>Total Votes: {skater.total}</small>
        </div> */
}
