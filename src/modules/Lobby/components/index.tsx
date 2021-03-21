import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/store";
import Players from "./Players/Players";

const mapStateToProps = (state: RootState) => ({
    players: state.lobby.players,
});

const mapDispatch = {};

const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>;

type Props = PropsRedux;

const Lobby: React.FC<Props> = ({ players }) => {
    return <Players players={players} />;
};

export default Lobby;
