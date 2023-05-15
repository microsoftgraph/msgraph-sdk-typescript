import {deserializeIntoGetAuditActivityTypesWithCategoryResponse} from './deserializeIntoGetAuditActivityTypesWithCategoryResponse';
import {GetAuditActivityTypesWithCategoryResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAuditActivityTypesWithCategoryResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAuditActivityTypesWithCategoryResponse;
}
