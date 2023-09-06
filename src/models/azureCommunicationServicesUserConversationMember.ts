import { type ConversationMember } from './conversationMember';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AzureCommunicationServicesUserConversationMember extends ConversationMember, Parsable {
    /**
     * Azure Communication Services ID of the user.
     */
    azureCommunicationServicesId?: string | undefined;
}
