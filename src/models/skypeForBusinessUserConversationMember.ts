import { type ConversationMember } from './conversationMember';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SkypeForBusinessUserConversationMember extends ConversationMember, Parsable {
    /**
     * ID of the tenant that the user belongs to.
     */
    tenantId?: string | undefined;
    /**
     * Azure Active Directory ID of the user.
     */
    userId?: string | undefined;
}
