import { type ConversationMember } from './conversationMember';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MicrosoftAccountUserConversationMember extends ConversationMember, Parsable {
    /**
     * Microsoft Account ID of the user.
     */
    userId?: string | undefined;
}
