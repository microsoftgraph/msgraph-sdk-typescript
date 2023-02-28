import {AadUserConversationMember, AnonymousGuestConversationMember, AzureCommunicationServicesUserConversationMember, ConversationMember, MicrosoftAccountUserConversationMember, SkypeForBusinessUserConversationMember, SkypeUserConversationMember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserConversationMember":
                    return new AadUserConversationMember();
                case "#microsoft.graph.anonymousGuestConversationMember":
                    return new AnonymousGuestConversationMember();
                case "#microsoft.graph.azureCommunicationServicesUserConversationMember":
                    return new AzureCommunicationServicesUserConversationMember();
                case "#microsoft.graph.microsoftAccountUserConversationMember":
                    return new MicrosoftAccountUserConversationMember();
                case "#microsoft.graph.skypeForBusinessUserConversationMember":
                    return new SkypeForBusinessUserConversationMember();
                case "#microsoft.graph.skypeUserConversationMember":
                    return new SkypeUserConversationMember();
            }
        }
    }
    return new ConversationMember();
}
