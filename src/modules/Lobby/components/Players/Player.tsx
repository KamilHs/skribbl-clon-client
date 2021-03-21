import React from "react";
import { IPlayerData, PlayerType } from "../../../../redux/types";

interface IProps {
    player: IPlayerData;
}

const Player: React.FC<IProps> = ({ player: { nickname, role, isMe } }) => (
    <div className="players__list-item">
        <div className="player">
            <div className="player__left">
                <p className="player__nickname">{nickname}</p>
                {isMe && <p className="player__self">You</p>}
            </div>
            {role === PlayerType.admin && <p className="player__role">Admin</p>}
        </div>
    </div>
);

export default Player;
