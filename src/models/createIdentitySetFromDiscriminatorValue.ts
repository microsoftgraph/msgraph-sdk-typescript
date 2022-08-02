import {ChatMessageFromIdentitySet, ChatMessageMentionedIdentitySet, ChatMessageReactionIdentitySet, IdentitySet, SharePointIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.chatMessageFromIdentitySet":
                    return new ChatMessageFromIdentitySet();
                case "#microsoft.graph.chatMessageMentionedIdentitySet":
                    return new ChatMessageMentionedIdentitySet();
                case "#microsoft.graph.chatMessageReactionIdentitySet":
                    return new ChatMessageReactionIdentitySet();
                case "#microsoft.graph.sharePointIdentitySet":
                    return new SharePointIdentitySet();
            }
        }
    }
    return new IdentitySet();
}
