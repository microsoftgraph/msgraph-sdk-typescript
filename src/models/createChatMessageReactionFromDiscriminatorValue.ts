import {deserializeIntoChatMessageReaction} from './deserializeIntoChatMessageReaction';
import {ChatMessageReaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageReactionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageReaction;
}
