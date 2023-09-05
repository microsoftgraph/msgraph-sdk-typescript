import { deserializeIntoGetCompliancePolicyNonComplianceSummaryReportPostRequestBody } from './deserializeIntoGetCompliancePolicyNonComplianceSummaryReportPostRequestBody';
import { type GetCompliancePolicyNonComplianceSummaryReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetCompliancePolicyNonComplianceSummaryReportPostRequestBody;
}
