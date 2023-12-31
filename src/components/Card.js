import React from "react"


const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 mw5">
            <img src={`https://robohash.org/new${id}?200x200`} alt="robot image" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;