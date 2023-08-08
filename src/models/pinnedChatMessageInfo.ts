import type {ChatMessage} from './chatMessage';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PinnedChatMessageInfo extends Entity, Parsable {
    /**
     * Represents details about the chat message that is pinned.
     */
    message?: ChatMessage | undefined;
}
