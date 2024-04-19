import React from 'react';

const PlayerCard = ({ player }) => {
    return (
        <div className="card">
            <img src={player.photoUrl} alt={player.name} />
            <div className="player-info">
                <h2>{player.name}</h2>
                <p><strong>Country:</strong> {player.country}</p>
                <p><strong>Club:</strong> {player.club}</p>
            </div>
        </div>
    );
};

export default PlayerCard;
