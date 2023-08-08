import type {ContentType} from './contentType';
import type {ContentTypeCollectionResponse} from './contentTypeCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from './serializeContentType';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeCollectionResponse(writer: SerializationWriter, contentTypeCollectionResponse: ContentTypeCollectionResponse | undefined = {} as ContentTypeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentTypeCollectionResponse)
        writer.writeCollectionOfObjectValues<ContentType>("value", contentTypeCollectionResponse.value, serializeContentType);
}
