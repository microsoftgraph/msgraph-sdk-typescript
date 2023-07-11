import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConversationMember extends Entity, Parsable {
    /**
     * The display name of the user.
     */
    displayName?: string | undefined;
    /**
     * The roles for that user. This property contains additional qualifiers only when relevant - for example, if the member has owner privileges, the roles property contains owner as one of the values. Similarly, if the member is an in-tenant guest, the roles property contains guest as one of the values. A basic member should not have any values specified in the roles property. An Out-of-tenant external member is assigned the owner role.
     */
    roles?: string[] | undefined;
    /**
     * The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is settable only for members of a chat.
     */
    visibleHistoryStartDateTime?: Date | undefined;
}
