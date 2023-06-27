import {ConversationMember} from './conversationMember';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAccountUserConversationMember extends ConversationMember, Parsable {
    /**
     * Microsoft Account ID of the user.
     */
    userId?: string | undefined;
}
