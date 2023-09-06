import { deserializeIntoGetAuditActivityTypesWithCategoryResponse } from './deserializeIntoGetAuditActivityTypesWithCategoryResponse';
import { type GetAuditActivityTypesWithCategoryResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAuditActivityTypesWithCategoryResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAuditActivityTypesWithCategoryResponse;
}
