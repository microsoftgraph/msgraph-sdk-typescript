import {ContentType} from '../../../../models/contentType';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from '../../../../models/serializeContentType';
import {GetCompatibleHubContentTypesResponse} from './getCompatibleHubContentTypesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetCompatibleHubContentTypesResponse(writer: SerializationWriter, getCompatibleHubContentTypesResponse: GetCompatibleHubContentTypesResponse | undefined = {} as GetCompatibleHubContentTypesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getCompatibleHubContentTypesResponse)
        writer.writeCollectionOfObjectValues<ContentType>("value", getCompatibleHubContentTypesResponse.value, serializeContentType);
}
