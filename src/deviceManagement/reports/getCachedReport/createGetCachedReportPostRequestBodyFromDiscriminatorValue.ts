import { deserializeIntoGetCachedReportPostRequestBody } from './deserializeIntoGetCachedReportPostRequestBody';
import { type GetCachedReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetCachedReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetCachedReportPostRequestBody;
}
