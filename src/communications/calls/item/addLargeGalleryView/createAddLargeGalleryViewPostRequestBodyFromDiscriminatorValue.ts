import { deserializeIntoAddLargeGalleryViewPostRequestBody } from './deserializeIntoAddLargeGalleryViewPostRequestBody';
import { type AddLargeGalleryViewPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddLargeGalleryViewPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddLargeGalleryViewPostRequestBody;
}
