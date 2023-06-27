import {ConversationMember} from './conversationMember';
import {Parsable} from '@microsoft/kiota-abstractions';

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
