import React from "react";

import { IMessage } from "../../../../../redux/types";
import Message from "./Message";

interface IProps {
    messages: IMessage[];
}

const Messages: React.FC<IProps> = ({ messages }) => (
    <ul className="messages__list">
        {messages.map((message) => (
            <Message key={message.id} message={message} />
        ))}
    </ul>
);

export default Messages;
