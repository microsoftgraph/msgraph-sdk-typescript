import { deserializeIntoThumbnailSetCollectionResponse } from './deserializeIntoThumbnailSetCollectionResponse';
import { type ThumbnailSetCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createThumbnailSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnailSetCollectionResponse;
}
