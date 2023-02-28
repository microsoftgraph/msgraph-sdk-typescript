import {GetAuditActivityTypesWithCategoryResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAuditActivityTypesWithCategoryResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAuditActivityTypesWithCategoryResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAuditActivityTypesWithCategoryResponse();
}
