import {ChatMessageAttachment} from './chatMessageAttachment';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageAttachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageAttachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageAttachment();
}
