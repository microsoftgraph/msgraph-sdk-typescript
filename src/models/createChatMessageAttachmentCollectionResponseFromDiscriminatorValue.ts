import {ChatMessageAttachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatMessageAttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatMessageAttachmentCollectionResponse();
}
