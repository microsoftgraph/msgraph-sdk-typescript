import {deserializeIntoChatMessageFromIdentitySet} from './deserializeIntoChatMessageFromIdentitySet';
import {deserializeIntoChatMessageMentionedIdentitySet} from './deserializeIntoChatMessageMentionedIdentitySet';
import {deserializeIntoChatMessageReactionIdentitySet} from './deserializeIntoChatMessageReactionIdentitySet';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoSharePointIdentitySet} from './deserializeIntoSharePointIdentitySet';
import {ChatMessageFromIdentitySet, ChatMessageMentionedIdentitySet, ChatMessageReactionIdentitySet, IdentitySet, SharePointIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.chatMessageFromIdentitySet":
                    return deserializeIntoChatMessageFromIdentitySet;
                case "#microsoft.graph.chatMessageMentionedIdentitySet":
                    return deserializeIntoChatMessageMentionedIdentitySet;
                case "#microsoft.graph.chatMessageReactionIdentitySet":
                    return deserializeIntoChatMessageReactionIdentitySet;
                case "#microsoft.graph.sharePointIdentitySet":
                    return deserializeIntoSharePointIdentitySet;
            }
        }
    }
    return deserializeIntoIdentitySet;
}
