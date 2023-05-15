import {createThumbnailFromDiscriminatorValue} from './createThumbnailFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeThumbnail} from './serializeThumbnail';
import {Thumbnail} from './thumbnail';
import {ThumbnailSet} from './thumbnailSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThumbnailSet(thumbnailSet: ThumbnailSet | undefined = {} as ThumbnailSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(thumbnailSet),
        "large": n => { thumbnailSet.large = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
        "medium": n => { thumbnailSet.medium = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
        "small": n => { thumbnailSet.small = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
        "source": n => { thumbnailSet.source = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
    }
}
