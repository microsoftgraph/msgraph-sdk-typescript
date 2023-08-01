import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeThumbnailSet} from './serializeThumbnailSet';
import type {ThumbnailSet} from './thumbnailSet';
import type {ThumbnailSetCollectionResponse} from './thumbnailSetCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailSetCollectionResponse(thumbnailSetCollectionResponse: ThumbnailSetCollectionResponse | undefined = {} as ThumbnailSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(thumbnailSetCollectionResponse),
        "value": n => { thumbnailSetCollectionResponse.value = n.getCollectionOfObjectValues<ThumbnailSet>(createThumbnailSetFromDiscriminatorValue); },
    }
}
