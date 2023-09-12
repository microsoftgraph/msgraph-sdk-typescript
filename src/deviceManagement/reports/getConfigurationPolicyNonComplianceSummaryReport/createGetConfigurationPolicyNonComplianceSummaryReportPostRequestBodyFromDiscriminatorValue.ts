import { deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody } from './deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody';
import { type GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody;
}
