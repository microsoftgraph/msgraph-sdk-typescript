import {AadUserConversationMember, ConversationMember} from './index';
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
            }
        }
    }
    return new ConversationMember();
}
