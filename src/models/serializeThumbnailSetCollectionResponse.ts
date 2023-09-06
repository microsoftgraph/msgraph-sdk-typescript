import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeThumbnailSet } from './serializeThumbnailSet';
import { type ThumbnailSet } from './thumbnailSet';
import { type ThumbnailSetCollectionResponse } from './thumbnailSetCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeThumbnailSetCollectionResponse(writer: SerializationWriter, thumbnailSetCollectionResponse: ThumbnailSetCollectionResponse | undefined = {} as ThumbnailSetCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, thumbnailSetCollectionResponse)
        writer.writeCollectionOfObjectValues<ThumbnailSet>("value", thumbnailSetCollectionResponse.value, serializeThumbnailSet);
}
