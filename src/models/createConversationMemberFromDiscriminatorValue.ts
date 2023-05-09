import {deserializeIntoAadUserConversationMember} from './deserializeIntoAadUserConversationMember';
import {deserializeIntoAnonymousGuestConversationMember} from './deserializeIntoAnonymousGuestConversationMember';
import {deserializeIntoAzureCommunicationServicesUserConversationMember} from './deserializeIntoAzureCommunicationServicesUserConversationMember';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoMicrosoftAccountUserConversationMember} from './deserializeIntoMicrosoftAccountUserConversationMember';
import {deserializeIntoSkypeForBusinessUserConversationMember} from './deserializeIntoSkypeForBusinessUserConversationMember';
import {deserializeIntoSkypeUserConversationMember} from './deserializeIntoSkypeUserConversationMember';
import {AadUserConversationMember, AnonymousGuestConversationMember, AzureCommunicationServicesUserConversationMember, ConversationMember, MicrosoftAccountUserConversationMember, SkypeForBusinessUserConversationMember, SkypeUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserConversationMember":
                    return deserializeIntoAadUserConversationMember;
                case "#microsoft.graph.anonymousGuestConversationMember":
                    return deserializeIntoAnonymousGuestConversationMember;
                case "#microsoft.graph.azureCommunicationServicesUserConversationMember":
                    return deserializeIntoAzureCommunicationServicesUserConversationMember;
                case "#microsoft.graph.microsoftAccountUserConversationMember":
                    return deserializeIntoMicrosoftAccountUserConversationMember;
                case "#microsoft.graph.skypeForBusinessUserConversationMember":
                    return deserializeIntoSkypeForBusinessUserConversationMember;
                case "#microsoft.graph.skypeUserConversationMember":
                    return deserializeIntoSkypeUserConversationMember;
            }
        }
    }
    return deserializeIntoConversationMember;
}
