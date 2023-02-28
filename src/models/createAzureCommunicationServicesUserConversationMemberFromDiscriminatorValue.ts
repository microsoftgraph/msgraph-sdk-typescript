import {AzureCommunicationServicesUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAzureCommunicationServicesUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : AzureCommunicationServicesUserConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AzureCommunicationServicesUserConversationMember();
}
