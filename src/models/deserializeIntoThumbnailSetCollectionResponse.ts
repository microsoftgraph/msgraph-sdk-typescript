import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeThumbnailSet} from './serializeThumbnailSet';
import {ThumbnailSet} from './thumbnailSet';
import {ThumbnailSetCollectionResponse} from './thumbnailSetCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailSetCollectionResponse(thumbnailSetCollectionResponse: ThumbnailSetCollectionResponse | undefined = {} as ThumbnailSetCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(thumbnailSetCollectionResponse),
        "value": n => { thumbnailSetCollectionResponse.value = n.getCollectionOfObjectValues<ThumbnailSet>(createThumbnailSetFromDiscriminatorValue); },
    }
}
