import {deserializeIntoChatMessageMentionedIdentitySet} from './deserializeIntoChatMessageMentionedIdentitySet';
import {ChatMessageMentionedIdentitySet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageMentionedIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageMentionedIdentitySet;
}
