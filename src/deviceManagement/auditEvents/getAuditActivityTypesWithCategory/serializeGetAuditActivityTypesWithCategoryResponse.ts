import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import type {GetAuditActivityTypesWithCategoryResponse} from './getAuditActivityTypesWithCategoryResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAuditActivityTypesWithCategoryResponse(writer: SerializationWriter, getAuditActivityTypesWithCategoryResponse: GetAuditActivityTypesWithCategoryResponse | undefined = {} as GetAuditActivityTypesWithCategoryResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAuditActivityTypesWithCategoryResponse)
        writer.writeCollectionOfPrimitiveValues<string>("value", getAuditActivityTypesWithCategoryResponse.value);
}
