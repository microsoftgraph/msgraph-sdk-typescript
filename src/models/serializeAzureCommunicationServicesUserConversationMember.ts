import {AzureCommunicationServicesUserConversationMember} from './azureCommunicationServicesUserConversationMember';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAzureCommunicationServicesUserConversationMember(writer: SerializationWriter, azureCommunicationServicesUserConversationMember: AzureCommunicationServicesUserConversationMember | undefined = {} as AzureCommunicationServicesUserConversationMember) : void {
        serializeConversationMember(writer, azureCommunicationServicesUserConversationMember)
        writer.writeStringValue("azureCommunicationServicesId", azureCommunicationServicesUserConversationMember.azureCommunicationServicesId);
}
