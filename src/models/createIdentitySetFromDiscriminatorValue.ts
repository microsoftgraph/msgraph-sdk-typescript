import {ChatMessageFromIdentitySetImpl, ChatMessageMentionedIdentitySetImpl, ChatMessageReactionIdentitySetImpl, IdentitySetImpl, SharePointIdentitySetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.chatMessageFromIdentitySet":
                    return new ChatMessageFromIdentitySetImpl();
                case "#microsoft.graph.chatMessageMentionedIdentitySet":
                    return new ChatMessageMentionedIdentitySetImpl();
                case "#microsoft.graph.chatMessageReactionIdentitySet":
                    return new ChatMessageReactionIdentitySetImpl();
                case "#microsoft.graph.sharePointIdentitySet":
                    return new SharePointIdentitySetImpl();
            }
        }
    }
    return new IdentitySetImpl();
}
