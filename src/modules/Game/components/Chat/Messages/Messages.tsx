import React from "react";

import { IMessage } from "../../../../../redux/types";
import Message from "./Message";

import "./index.css";

interface IProps {
    messages: IMessage[];
}

const Messages: React.FC<IProps> = ({ messages }) => {
    const scrollTo = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        if (scrollTo.current) {
            scrollTo.current.scrollIntoView();
        }
    }, [messages]);

    return (
        <ul className="messages__list">
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
            <span ref={scrollTo} />
        </ul>
    );
};

export default Messages;
