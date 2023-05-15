import {deserializeIntoAttachmentBaseCollectionResponse} from './deserializeIntoAttachmentBaseCollectionResponse';
import {AttachmentBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentBaseCollectionResponse;
}
