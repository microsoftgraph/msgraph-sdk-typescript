import {ContentType} from './contentType';
import {ContentTypeCollectionResponse} from './contentTypeCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from './serializeContentType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContentTypeCollectionResponse(contentTypeCollectionResponse: ContentTypeCollectionResponse | undefined = {} as ContentTypeCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contentTypeCollectionResponse)
        writer.writeCollectionOfObjectValues<ContentType>("value", contentTypeCollectionResponse.value, serializeContentType);
}
