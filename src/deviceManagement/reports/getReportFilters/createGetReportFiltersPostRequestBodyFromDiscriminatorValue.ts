import {GetReportFiltersPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetReportFiltersPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetReportFiltersPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetReportFiltersPostRequestBodyImpl();
}
