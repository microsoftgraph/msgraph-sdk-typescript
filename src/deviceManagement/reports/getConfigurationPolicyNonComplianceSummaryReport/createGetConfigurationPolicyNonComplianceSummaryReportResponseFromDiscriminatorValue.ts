import {GetConfigurationPolicyNonComplianceSummaryReportResponse} from './getConfigurationPolicyNonComplianceSummaryReportResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceSummaryReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationPolicyNonComplianceSummaryReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationPolicyNonComplianceSummaryReportResponse();
}
