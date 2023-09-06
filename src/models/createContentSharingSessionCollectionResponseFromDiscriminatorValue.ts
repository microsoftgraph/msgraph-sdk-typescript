import { deserializeIntoContentSharingSessionCollectionResponse } from './deserializeIntoContentSharingSessionCollectionResponse';
import { type ContentSharingSessionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentSharingSessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentSharingSessionCollectionResponse;
}
