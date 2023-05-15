import {deserializeIntoGetHistoricalReportPostRequestBody} from './deserializeIntoGetHistoricalReportPostRequestBody';
import {GetHistoricalReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetHistoricalReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetHistoricalReportPostRequestBody;
}
