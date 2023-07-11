import {ConversationMember} from './conversationMember';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AzureCommunicationServicesUserConversationMember extends ConversationMember, Parsable {
    /**
     * Azure Communication Services ID of the user.
     */
    azureCommunicationServicesId?: string | undefined;
}
