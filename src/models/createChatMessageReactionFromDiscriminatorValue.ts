import { deserializeIntoChatMessageReaction } from './deserializeIntoChatMessageReaction';
import { type ChatMessageReaction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageReactionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageReaction;
}
