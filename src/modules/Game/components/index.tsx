import React from "react";
import { connect, ConnectedProps } from "react-redux";
import Players from "../../../components/Players/Players";
import { RootState } from "../../../redux/store";

import Canvas from "./Canvas";
import Chat from "./Chat";

import "./index.css";

const mapStateToProps = (state: RootState) => ({
    ...state.lobby,
});

const mapDispatch = {};

const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>;

type Props = PropsRedux;

const Game: React.FC<Props> = ({ players }) => {
    const player = players?.find((player) => player.isMe);
    return (
        <div className="game-container">
            <Players players={players} leaderboard />
            <Canvas isDrawer={player?.isDrawer || false} />
            <Chat />
        </div>
    );
};

export default connector(Game);
