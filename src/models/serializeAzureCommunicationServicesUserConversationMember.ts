import {AzureCommunicationServicesUserConversationMember} from './azureCommunicationServicesUserConversationMember';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAzureCommunicationServicesUserConversationMember(azureCommunicationServicesUserConversationMember: AzureCommunicationServicesUserConversationMember | undefined = {} as AzureCommunicationServicesUserConversationMember, writer: SerializationWriter) : void {
        serializeConversationMember(writer, azureCommunicationServicesUserConversationMember)
        writer.writeStringValue("azureCommunicationServicesId", azureCommunicationServicesUserConversationMember.azureCommunicationServicesId);
}
