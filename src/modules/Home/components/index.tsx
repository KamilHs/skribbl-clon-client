import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { lobbyActions } from "../../../redux/actions";

import "./index.css";

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
    const [nickname, setNickname] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    const id = React.useMemo<string | null>(() => match.params?.id || null, [
        match,
    ]);

    const handleInputChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setNickname(e.target.value);
        },
        []
    );

    const handleSubmit = React.useCallback(() => {
        if (nickname.trim().length === 0) {
            return setError("Nickname is required");
        }
        if (isValidId) {
            // Join game
        } else {
            // Create game
        }
    }, [nickname, isValidId]);

    React.useEffect(() => {
        if (!id || !fetchIsValidId) return;
        fetchIsValidId(id);
    }, [id, fetchIsValidId]);

    return (
        <div className="home__container">
            <div className="home__content">
                <form action="#" className="home__form">
                    {error !== "" && (
                        <div className="home__form-error">
                            <span className="home__form-error-text">
                                {error}
                            </span>
                        </div>
                    )}
                    <div className="home__form-group">
                        <label htmlFor="nickname" className="home__form-label">
                            Nickname
                        </label>
                        <input
                            type="text"
                            id="nickname"
                            className="home__form-input"
                            value={nickname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="home__form-button-container">
                        {isValidId ? (
                            <button
                                type="button"
                                className="home__form-join-button"
                                onClick={handleSubmit}
                            >
                                Join Game
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="home__form-create-button"
                                onClick={handleSubmit}
                            >
                                Create Game
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withRouter(connector(Home));
