import {GetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyImpl();
}
