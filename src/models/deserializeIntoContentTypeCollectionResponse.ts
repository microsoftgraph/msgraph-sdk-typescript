import {ContentType} from './contentType';
import {ContentTypeCollectionResponse} from './contentTypeCollectionResponse';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeContentType} from './serializeContentType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeCollectionResponse(contentTypeCollectionResponse: ContentTypeCollectionResponse | undefined = {} as ContentTypeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentTypeCollectionResponse),
        "value": n => { contentTypeCollectionResponse.value = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
    }
}
