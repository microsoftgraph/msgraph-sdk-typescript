import {FileAttachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileAttachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileAttachmentCollectionResponse();
}
