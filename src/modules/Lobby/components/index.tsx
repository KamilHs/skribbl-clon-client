import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../../redux/store";
import Players from "../../../components/Players/Players";
import Panel from "./Panel";

import "./index.css";

const mapStateToProps = (state: RootState) => ({
    ...state.lobby,
});

const mapDispatch = {};

const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>;

type Props = PropsRedux;

const Lobby: React.FC<Props> = ({ players, roomId }) => {
    return (
        <div className="lobby">
            <Players players={players} />
            <Panel roomId={roomId} players={players} />
        </div>
    );
};

export default connector(Lobby);
