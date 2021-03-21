import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import ChatInput from "./ChatInput";
import Messages from "./Messages/Messages";

import "./index.css";

const Chat: React.FC = () => {
    const messages = useSelector((state: RootState) => state.game.messages);

    return (
        <div className="chat">
            <Messages messages={messages} />
            <ChatInput />
        </div>
    );
};

export default Chat;
