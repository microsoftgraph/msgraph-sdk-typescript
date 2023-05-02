import {deserializeIntoGetReportFiltersPostRequestBody} from './deserializeIntoGetReportFiltersPostRequestBody';
import {GetReportFiltersPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetReportFiltersPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetReportFiltersPostRequestBody;
}
