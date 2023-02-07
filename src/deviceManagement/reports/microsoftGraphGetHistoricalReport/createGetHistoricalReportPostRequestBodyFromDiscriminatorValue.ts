import {GetHistoricalReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetHistoricalReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetHistoricalReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetHistoricalReportPostRequestBody();
}
