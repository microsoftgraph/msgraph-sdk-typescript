import { deserializeIntoAttachmentSessionCollectionResponse } from './deserializeIntoAttachmentSessionCollectionResponse';
import { type AttachmentSessionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttachmentSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentSessionCollectionResponse;
}
