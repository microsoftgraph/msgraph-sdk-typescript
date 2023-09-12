import { deserializeIntoChatMessageFromIdentitySet } from './deserializeIntoChatMessageFromIdentitySet';
import { type ChatMessageFromIdentitySet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageFromIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageFromIdentitySet;
}
