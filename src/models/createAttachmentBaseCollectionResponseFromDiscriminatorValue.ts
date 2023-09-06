import { deserializeIntoAttachmentBaseCollectionResponse } from './deserializeIntoAttachmentBaseCollectionResponse';
import { type AttachmentBaseCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttachmentBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentBaseCollectionResponse;
}
