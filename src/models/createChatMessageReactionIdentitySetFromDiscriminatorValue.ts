import {deserializeIntoChatMessageReactionIdentitySet} from './deserializeIntoChatMessageReactionIdentitySet';
import {ChatMessageReactionIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageReactionIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageReactionIdentitySet;
}
