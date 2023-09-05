import { type ContentType } from './contentType';
import { type ContentTypeCollectionResponse } from './contentTypeCollectionResponse';
import { createContentTypeFromDiscriminatorValue } from './createContentTypeFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeContentType } from './serializeContentType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeCollectionResponse(contentTypeCollectionResponse: ContentTypeCollectionResponse | undefined = {} as ContentTypeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contentTypeCollectionResponse),
        "value": n => { contentTypeCollectionResponse.value = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
    }
}
