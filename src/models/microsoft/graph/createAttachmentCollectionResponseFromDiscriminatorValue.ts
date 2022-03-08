import {AttachmentCollectionResponse} from './attachmentCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttachmentCollectionResponse();
}
