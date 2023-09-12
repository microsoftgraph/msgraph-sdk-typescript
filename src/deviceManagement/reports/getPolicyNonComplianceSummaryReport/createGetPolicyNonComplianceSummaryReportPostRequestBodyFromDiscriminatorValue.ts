import { deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody } from './deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody';
import { type GetPolicyNonComplianceSummaryReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody;
}
