import { deserializeIntoChatMessageReactionIdentitySet } from './deserializeIntoChatMessageReactionIdentitySet';
import { type ChatMessageReactionIdentitySet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageReactionIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageReactionIdentitySet;
}
