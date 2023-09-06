import { type ConversationMember } from './conversationMember';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SkypeUserConversationMember extends ConversationMember, Parsable {
    /**
     * Skype ID of the user.
     */
    skypeId?: string | undefined;
}
