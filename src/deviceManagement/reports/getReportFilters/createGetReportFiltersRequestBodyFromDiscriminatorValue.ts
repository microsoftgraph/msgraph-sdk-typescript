import {GetReportFiltersRequestBody} from './getReportFiltersRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetReportFiltersRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetReportFiltersRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetReportFiltersRequestBody();
}
