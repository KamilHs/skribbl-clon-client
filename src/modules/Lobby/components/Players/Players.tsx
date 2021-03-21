import React from "react";

import { IPlayerData } from "../../../../redux/types";
import Player from "./Player";

import  "./index.css";

interface IProps {
    players: IPlayerData[] | null;
}

const Players: React.FC<IProps> = ({ players }) => (
    <div className="players__list">
        {players?.map((player) => (
            <Player key={Math.random()} player={player} />
        ))}
    </div>
);

export default Players;
