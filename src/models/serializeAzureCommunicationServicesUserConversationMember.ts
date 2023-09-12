import { type AzureCommunicationServicesUserConversationMember } from './azureCommunicationServicesUserConversationMember';
import { serializeConversationMember } from './serializeConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAzureCommunicationServicesUserConversationMember(writer: SerializationWriter, azureCommunicationServicesUserConversationMember: AzureCommunicationServicesUserConversationMember | undefined = {} as AzureCommunicationServicesUserConversationMember) : void {
        serializeConversationMember(writer, azureCommunicationServicesUserConversationMember)
        writer.writeStringValue("azureCommunicationServicesId", azureCommunicationServicesUserConversationMember.azureCommunicationServicesId);
}
