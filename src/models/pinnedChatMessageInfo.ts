import {ChatMessage} from './chatMessage';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfo extends Entity, Parsable {
    /**
     * Represents details about the chat message that is pinned.
     */
    message?: ChatMessage | undefined;
}
