import {GetReportFiltersRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetReportFiltersRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetReportFiltersRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetReportFiltersRequestBodyImpl();
}
