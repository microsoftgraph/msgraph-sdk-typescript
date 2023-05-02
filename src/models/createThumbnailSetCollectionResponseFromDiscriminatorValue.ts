import {deserializeIntoThumbnailSetCollectionResponse} from './deserializeIntoThumbnailSetCollectionResponse';
import {ThumbnailSetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createThumbnailSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoThumbnailSetCollectionResponse;
}
