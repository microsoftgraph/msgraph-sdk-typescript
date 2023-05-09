import {deserializeIntoChatMessageMention} from './deserializeIntoChatMessageMention';
import {ChatMessageMention} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageMentionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageMention;
}
