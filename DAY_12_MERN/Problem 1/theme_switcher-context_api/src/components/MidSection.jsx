import React from 'react';
import { useTheme } from './ThemeContext';
import { players } from './PlayerData';
import PlayerCard from './PlayerCard';

const MidSection = () => {
    const { theme } = useTheme();

    return (
        <div className={`mid-section ${theme}`}>
            {players.map(player => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    );
};

export default MidSection;
