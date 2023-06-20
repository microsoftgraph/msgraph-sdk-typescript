import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeSite} from '../../../../models/serializeSite';
import {Site} from '../../../../models/site';
import {GetAllSitesResponse} from './getAllSitesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAllSitesResponse(getAllSitesResponse: GetAllSitesResponse | undefined = {} as GetAllSitesResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAllSitesResponse)
        writer.writeCollectionOfObjectValues<Site>("value", getAllSitesResponse.value, serializeSite);
}
