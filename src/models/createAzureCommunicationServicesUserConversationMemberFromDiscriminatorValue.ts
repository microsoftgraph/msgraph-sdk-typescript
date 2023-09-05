import { deserializeIntoAzureCommunicationServicesUserConversationMember } from './deserializeIntoAzureCommunicationServicesUserConversationMember';
import { type AzureCommunicationServicesUserConversationMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAzureCommunicationServicesUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAzureCommunicationServicesUserConversationMember;
}
