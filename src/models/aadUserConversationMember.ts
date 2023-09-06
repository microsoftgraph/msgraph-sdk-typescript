import { type ConversationMember } from './conversationMember';
import { type User } from './user';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AadUserConversationMember extends ConversationMember, Parsable {
    /**
     * The email address of the user.
     */
    email?: string | undefined;
    /**
     * TenantId which the Azure AD user belongs to.
     */
    tenantId?: string | undefined;
    /**
     * The user property
     */
    user?: User | undefined;
    /**
     * The guid of the user.
     */
    userId?: string | undefined;
}
