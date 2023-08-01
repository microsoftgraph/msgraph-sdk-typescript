import {serializeEntity} from './serializeEntity';
import {serializeThumbnail} from './serializeThumbnail';
import type {Thumbnail} from './thumbnail';
import type {ThumbnailSet} from './thumbnailSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThumbnailSet(writer: SerializationWriter, thumbnailSet: ThumbnailSet | undefined = {} as ThumbnailSet) : void {
        serializeEntity(writer, thumbnailSet)
        writer.writeObjectValue<Thumbnail>("large", thumbnailSet.large, serializeThumbnail);
        writer.writeObjectValue<Thumbnail>("medium", thumbnailSet.medium, serializeThumbnail);
        writer.writeObjectValue<Thumbnail>("small", thumbnailSet.small, serializeThumbnail);
        writer.writeObjectValue<Thumbnail>("source", thumbnailSet.source, serializeThumbnail);
}
