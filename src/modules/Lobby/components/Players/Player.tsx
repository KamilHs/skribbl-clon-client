import React from "react";
import { IPlayerData, PlayerType } from "../../../../redux/types";

interface IProps {
    player: IPlayerData;
}

const Player: React.FC<IProps> = ({ player: { nickname, role, isMe } }) => (
    <div className="player__list-item">
        <p>{nickname}</p>
        {role === PlayerType.admin && <p>Admin</p>}
        {isMe && <p>You</p>}
    </div>
);

export default Player;
