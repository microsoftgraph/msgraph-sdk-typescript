import {deserializeIntoAttachmentSessionCollectionResponse} from './deserializeIntoAttachmentSessionCollectionResponse';
import {AttachmentSessionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttachmentSessionCollectionResponse;
}
