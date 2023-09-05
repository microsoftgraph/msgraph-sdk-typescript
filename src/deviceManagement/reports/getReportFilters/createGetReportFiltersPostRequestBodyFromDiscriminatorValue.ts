import { deserializeIntoGetReportFiltersPostRequestBody } from './deserializeIntoGetReportFiltersPostRequestBody';
import { type GetReportFiltersPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetReportFiltersPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetReportFiltersPostRequestBody;
}
