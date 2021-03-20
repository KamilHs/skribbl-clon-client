import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { RootState } from "../../../redux/store";
import lobbyActions from "../../../redux/actions/lobby";

const mapStateToProps = (state: RootState) => ({
    isValidId: state.lobby.isValidId,
});

const mapDispatch = {
    fetchIsValidId: lobbyActions.fetchIsValidId,
};

const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>;

type PathParamsType = {
    id?: string;
};

type PropsTypes = RouteComponentProps<PathParamsType> & PropsRedux;

const Home: React.FC<PropsTypes> = ({ match, isValidId, fetchIsValidId }) => {
    const id = React.useMemo(() => match.params?.id, [match]);

    React.useEffect(() => {
        if (!id || !fetchIsValidId) return;
        fetchIsValidId(id);
    }, [id, fetchIsValidId]);

    return <h1>{isValidId ? "Valid" : "Not Valid"}</h1>;
};

export default withRouter(connector(Home));
