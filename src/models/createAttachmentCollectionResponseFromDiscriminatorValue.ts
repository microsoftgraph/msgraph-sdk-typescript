import { deserializeIntoAttachmentCollectionResponse } from './deserializeIntoAttachmentCollectionResponse';
import { type AttachmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentCollectionResponse;
}
