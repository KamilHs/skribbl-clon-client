import React from "react";
import ShareLink from "./components/ShareLink";

interface IProps {
    roomId: string | null;
}

const Panel: React.FC<IProps> = ({ roomId }) => {
    return <ShareLink roomId={roomId} />;
};

export default Panel;
