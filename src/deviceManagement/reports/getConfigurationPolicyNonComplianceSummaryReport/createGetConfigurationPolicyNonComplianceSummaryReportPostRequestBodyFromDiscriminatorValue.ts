import {GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody();
}
