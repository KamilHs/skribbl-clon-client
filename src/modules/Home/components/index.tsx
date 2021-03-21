import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { homeActions, socketActions } from "../../../redux/actions";

import "./index.css";

const mapStateToProps = (state: RootState) => ({
    isValidId: state.home.isValidId,
    createError: state.home.error,
});

const mapDispatch = {
    fetchIsValidId: homeActions.fetchIsValidId,
    createRoom: socketActions.createRoom,
    joinRoom: socketActions.joinRoom,
};

const connector = connect(mapStateToProps, mapDispatch);

type PropsRedux = ConnectedProps<typeof connector>;

type PathParamsType = {
    id?: string;
};

type PropsTypes = RouteComponentProps<PathParamsType> & PropsRedux;

const Home: React.FC<PropsTypes> = ({
    match,
    isValidId,
    createError,
    fetchIsValidId,
    createRoom,
    joinRoom,
}) => {
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

    const handleSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (nickname.trim().length === 0) {
                return setError("Nickname is required");
            }
            if (isValidId) {
                // Join game
                joinRoom(id || "", nickname.trim());
            } else {
                // Create room
                createRoom(nickname.trim());
            }
        },
        [nickname, isValidId, id, createRoom, joinRoom]
    );

    React.useEffect(() => {
        if (!id || !fetchIsValidId) return;
        fetchIsValidId(id);
    }, [id, fetchIsValidId]);

    return (
        <div className="home__container">
            <div className="home__content">
                <form action="#" className="home__form" onSubmit={handleSubmit}>
                    {(error !== "" || createError !== null) && (
                        <div className="home__form-error">
                            <span className="home__form-error-text">
                                {createError || error}
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
                                type="submit"
                                className="home__form-join-button"
                            >
                                Join Game
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="home__form-create-button"
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
