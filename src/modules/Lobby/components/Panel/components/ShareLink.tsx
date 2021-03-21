import React from "react";

interface IProps {
    roomId: string | null;
}

const ShareLink: React.FC<IProps> = ({ roomId }) => {
    const shareLink = React.useMemo(
        () => `${window.location.origin}/${roomId}`,
        [roomId]
    );
    const copyClickHandler = React.useCallback(() => {
        window.navigator.clipboard.writeText(shareLink);
    }, [shareLink]);

    return (
        <div className="panel">
            <div className="panel__share-link-container">
                <label htmlFor="share-link" className="panel__share-link-label">
                    Share with friends
                </label>
                <input
                    type="text"
                    id="share-link"
                    className="panel__share-link-input"
                    defaultValue={shareLink}
                />
                <button
                    type="button"
                    className="panel__share-link-button"
                    onClick={copyClickHandler}
                >
                    Copy
                </button>
            </div>
        </div>
    );
};

export default ShareLink;
