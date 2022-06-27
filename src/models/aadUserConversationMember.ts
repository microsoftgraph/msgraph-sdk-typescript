import {ConversationMember} from './conversationMember';
import {User} from './user';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AadUserConversationMember extends Partial<AdditionalDataHolder>, ConversationMember, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email address of the user. */
    email?: string | undefined;
    /** TenantId which the Azure AD user belongs to. */
    tenantId?: string | undefined;
    /** The user property */
    user?: User | undefined;
    /** The GUID of the user. */
    userId?: string | undefined;
}
