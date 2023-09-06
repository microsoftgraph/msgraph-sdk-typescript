import { deserializeIntoChatMessageMentionedIdentitySet } from './deserializeIntoChatMessageMentionedIdentitySet';
import { type ChatMessageMentionedIdentitySet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageMentionedIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageMentionedIdentitySet;
}
