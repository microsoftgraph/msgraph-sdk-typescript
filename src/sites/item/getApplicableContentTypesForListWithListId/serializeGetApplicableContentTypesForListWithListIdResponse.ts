import {ContentType} from '../../../models/contentType';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeContentType} from '../../../models/serializeContentType';
import {GetApplicableContentTypesForListWithListIdResponse} from './getApplicableContentTypesForListWithListIdResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetApplicableContentTypesForListWithListIdResponse(writer: SerializationWriter, getApplicableContentTypesForListWithListIdResponse: GetApplicableContentTypesForListWithListIdResponse | undefined = {} as GetApplicableContentTypesForListWithListIdResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getApplicableContentTypesForListWithListIdResponse)
        writer.writeCollectionOfObjectValues<ContentType>("value", getApplicableContentTypesForListWithListIdResponse.value, serializeContentType);
}
