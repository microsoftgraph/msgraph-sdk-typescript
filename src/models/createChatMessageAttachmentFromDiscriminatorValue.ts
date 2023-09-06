import { deserializeIntoChatMessageAttachment } from './deserializeIntoChatMessageAttachment';
import { type ChatMessageAttachment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatMessageAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageAttachment;
}
