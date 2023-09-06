import { type ContentType } from '../../../../../models/contentType';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeContentType } from '../../../../../models/serializeContentType';
import { type GetApplicableContentTypesForListWithListIdResponse } from './getApplicableContentTypesForListWithListIdResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetApplicableContentTypesForListWithListIdResponse(writer: SerializationWriter, getApplicableContentTypesForListWithListIdResponse: GetApplicableContentTypesForListWithListIdResponse | undefined = {} as GetApplicableContentTypesForListWithListIdResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getApplicableContentTypesForListWithListIdResponse)
        writer.writeCollectionOfObjectValues<ContentType>("value", getApplicableContentTypesForListWithListIdResponse.value, serializeContentType);
}
