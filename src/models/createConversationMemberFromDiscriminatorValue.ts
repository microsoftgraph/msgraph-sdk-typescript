import {ConversationMemberImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMemberImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.conversationMember":
                    return new ConversationMemberImpl();
            }
        }
    }
    return new ConversationMemberImpl();
}
