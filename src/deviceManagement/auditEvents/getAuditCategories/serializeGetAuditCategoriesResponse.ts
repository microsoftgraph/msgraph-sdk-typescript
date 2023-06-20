import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAuditCategoriesResponse} from './getAuditCategoriesResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAuditCategoriesResponse(getAuditCategoriesResponse: GetAuditCategoriesResponse | undefined = {} as GetAuditCategoriesResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAuditCategoriesResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getAuditCategoriesResponse.value);
}
