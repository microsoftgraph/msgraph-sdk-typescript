import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMember extends Entity, Partial<Parsable> {
    /** The display name of the user. */
    displayName?: string | undefined;
    /** The roles for that user. */
    roles?: string[] | undefined;
    /** The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat. */
    visibleHistoryStartDateTime?: Date | undefined;
}
