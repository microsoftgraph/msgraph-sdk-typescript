import {AzureCommunicationServicesUserConversationMember} from './azureCommunicationServicesUserConversationMember';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAzureCommunicationServicesUserConversationMember(azureCommunicationServicesUserConversationMember: AzureCommunicationServicesUserConversationMember | undefined = {} as AzureCommunicationServicesUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(azureCommunicationServicesUserConversationMember),
        "azureCommunicationServicesId": n => { azureCommunicationServicesUserConversationMember.azureCommunicationServicesId = n.getStringValue(); },
    }
}
