import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeThumbnailSet} from './serializeThumbnailSet';
import {ThumbnailSet} from './thumbnailSet';
import {ThumbnailSetCollectionResponse} from './thumbnailSetCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeThumbnailSetCollectionResponse(writer: SerializationWriter, thumbnailSetCollectionResponse: ThumbnailSetCollectionResponse | undefined = {} as ThumbnailSetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, thumbnailSetCollectionResponse)
        writer.writeCollectionOfObjectValues<ThumbnailSet>("value", thumbnailSetCollectionResponse.value, serializeThumbnailSet);
}
