import { deserializeIntoAddLargeGalleryViewOperation } from './deserializeIntoAddLargeGalleryViewOperation';
import { type AddLargeGalleryViewOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddLargeGalleryViewOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddLargeGalleryViewOperation;
}
