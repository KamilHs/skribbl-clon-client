import React from "react";
import { useDispatch } from "react-redux";
import { socketActions } from "../../../../redux/actions";
import { IPlayerData, PlayerType } from "../../../../redux/types";
import ShareLink from "./components/ShareLink";

interface IProps {
    roomId: string | null;
    players: IPlayerData[] | null;
}

const Panel: React.FC<IProps> = ({ roomId, players }) => {
    const player = React.useMemo(() => players?.find((player) => player.isMe), [
        players,
    ]);

    const dispatch = useDispatch();

    const handleStartClick = React.useCallback(
        () => dispatch(socketActions.startGame(roomId || "")),
        [roomId, dispatch]
    );

    return (
        <div className="panel">
            <ShareLink roomId={roomId} />
            {player?.role === PlayerType.admin && (
                <button
                    type="button"
                    className="start-game-button"
                    onClick={handleStartClick}
                >
                    Start the game
                </button>
            )}
        </div>
    );
};

export default Panel;
