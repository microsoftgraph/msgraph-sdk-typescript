import type {ContentType} from '../../../../../models/contentType';
import {createContentTypeFromDiscriminatorValue} from '../../../../../models/createContentTypeFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeContentType} from '../../../../../models/serializeContentType';
import type {GetApplicableContentTypesForListWithListIdResponse} from './getApplicableContentTypesForListWithListIdResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetApplicableContentTypesForListWithListIdResponse(getApplicableContentTypesForListWithListIdResponse: GetApplicableContentTypesForListWithListIdResponse | undefined = {} as GetApplicableContentTypesForListWithListIdResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getApplicableContentTypesForListWithListIdResponse),
        "value": n => { getApplicableContentTypesForListWithListIdResponse.value = n.getCollectionOfObjectValues<ContentType>(createContentTypeFromDiscriminatorValue); },
    }
}
