import React from "react";
import { IMessage } from "../../../../../redux/types";

interface IProps {
    message: IMessage;
}

const Message: React.FC<IProps> = ({
    message: { type, authorName, content },
}) => {
    return (
        <li className="message__list-item">
            <div className="message">
                <h5 className="message__author">{authorName}</h5>
                <p className="message__content">{content}</p>
            </div>
        </li>
    );
};

export default Message;
