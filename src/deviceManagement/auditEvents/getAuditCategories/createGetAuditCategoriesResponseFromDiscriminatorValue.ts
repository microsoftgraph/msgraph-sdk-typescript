import {deserializeIntoGetAuditCategoriesResponse} from './deserializeIntoGetAuditCategoriesResponse';
import {GetAuditCategoriesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAuditCategoriesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAuditCategoriesResponse;
}
