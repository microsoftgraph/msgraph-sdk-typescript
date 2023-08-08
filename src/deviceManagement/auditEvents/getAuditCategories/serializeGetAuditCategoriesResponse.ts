import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetAuditCategoriesResponse} from './getAuditCategoriesResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAuditCategoriesResponse(writer: SerializationWriter, getAuditCategoriesResponse: GetAuditCategoriesResponse | undefined = {} as GetAuditCategoriesResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAuditCategoriesResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getAuditCategoriesResponse.value);
}
