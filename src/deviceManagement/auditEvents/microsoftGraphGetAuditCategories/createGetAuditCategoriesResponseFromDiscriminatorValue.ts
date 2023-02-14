import {GetAuditCategoriesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAuditCategoriesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAuditCategoriesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAuditCategoriesResponse();
}
