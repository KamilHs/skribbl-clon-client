import React from "react";
import { useDispatch } from "react-redux";

import { socketActions } from "../../../../../redux/actions";

const ChatInput: React.FC = () => {
    const [message, setMessage] = React.useState<string>("");
    const dispatch = useDispatch();
    const handleSubmit = React.useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            const trimmed = message.trim();
            if (trimmed.length === 0) return;
            dispatch(socketActions.sendMessage(trimmed));
        },
        [message, dispatch]
    );
    return (
        <div className="chat-input__container">
            <form onSubmit={handleSubmit} action="#">
                <input
                    type="text"
                    className="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </div>
    );
};

export default ChatInput;
