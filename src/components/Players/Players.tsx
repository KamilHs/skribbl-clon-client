import React from "react";

import { IPlayerData } from "../../redux/types";
import Player from "./Player";

import "./index.css";

interface IProps {
    players: IPlayerData[] | null;
    leaderboard?: boolean;
}

const Players: React.FC<IProps> = ({ players, leaderboard }) => (
    <div
        className="players__list"
        style={{
            maxWidth: leaderboard ? "300px" : "",
        }}
    >
        {players?.map((player) => (
            <Player key={Math.random()} player={player} />
        ))}
    </div>
);

export default Players;
