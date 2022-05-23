import {GetHistoricalReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetHistoricalReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetHistoricalReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetHistoricalReportPostRequestBodyImpl();
}
