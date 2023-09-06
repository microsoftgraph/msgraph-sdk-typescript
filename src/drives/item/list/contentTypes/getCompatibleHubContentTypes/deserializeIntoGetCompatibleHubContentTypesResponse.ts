import { type ContentType } from '../../../../../models/contentType';
import { createContentTypeFromDiscriminatorValue } from '../../../../../models/createContentTypeFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeContentType } from '../../../../../models/serializeContentType';
import { type GetCompatibleHubContentTypesResponse } from './getCompatibleHubContentTypesResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCompatibleHubContentTypesResponse(getCompatibleHubContentTypesResponse: GetCompatibleHubContentTypesResponse | undefined = {} as GetCompatibleHubContentTypesResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getCompatibleHubContentTypesResponse),
        "value": n => { getCompatibleHubContentTypesResponse.value = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
    }
}
