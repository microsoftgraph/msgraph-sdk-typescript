import {GetReportFiltersResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetReportFiltersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetReportFiltersResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetReportFiltersResponseImpl();
}
