import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetAuditActivityTypesWithCategoryResponse} from './getAuditActivityTypesWithCategoryResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAuditActivityTypesWithCategoryResponse(getAuditActivityTypesWithCategoryResponse: GetAuditActivityTypesWithCategoryResponse | undefined = {} as GetAuditActivityTypesWithCategoryResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAuditActivityTypesWithCategoryResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getAuditActivityTypesWithCategoryResponse.value);
}
