import React from "react";
import { IPlayerData, PlayerType } from "../../redux/types";

interface IProps {
    player: IPlayerData;
    leaderboard?: boolean;
}

const Player: React.FC<IProps> = ({
    player: { nickname, role, isMe, score, isDrawer },
    leaderboard,
}) => (
    <div className="players__list-item">
        <div className="player">
            <div className="player__left">
                <p className="player__nickname">{nickname}</p>
                {isMe && <p className="player__self">You</p>}
            </div>
            <div className="player__right">
                {role === PlayerType.admin && (
                    <p className="player__role">Admin</p>
                )}
                {leaderboard && isDrawer && (
                    <p className="player__drawer">Drawer</p>
                )}
                {leaderboard && <p className="player__score">{score}</p>}
            </div>
        </div>
    </div>
);

export default Player;
