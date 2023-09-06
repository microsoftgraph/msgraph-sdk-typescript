import { deserializeIntoChatMessage } from './deserializeIntoChatMessage';
import { type ChatMessage } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessage;
}
