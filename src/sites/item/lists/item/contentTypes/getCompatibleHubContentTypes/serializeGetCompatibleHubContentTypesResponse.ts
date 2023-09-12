import { type ContentType } from '../../../../../../models/contentType';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeContentType } from '../../../../../../models/serializeContentType';
import { type GetCompatibleHubContentTypesResponse } from './getCompatibleHubContentTypesResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetCompatibleHubContentTypesResponse(writer: SerializationWriter, getCompatibleHubContentTypesResponse: GetCompatibleHubContentTypesResponse | undefined = {} as GetCompatibleHubContentTypesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getCompatibleHubContentTypesResponse)
        writer.writeCollectionOfObjectValues<ContentType>("value", getCompatibleHubContentTypesResponse.value, serializeContentType);
}
