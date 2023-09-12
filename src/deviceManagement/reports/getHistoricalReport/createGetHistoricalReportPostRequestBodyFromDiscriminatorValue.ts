import { deserializeIntoGetHistoricalReportPostRequestBody } from './deserializeIntoGetHistoricalReportPostRequestBody';
import { type GetHistoricalReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetHistoricalReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetHistoricalReportPostRequestBody;
}
