import {GetConfigurationPolicyNonComplianceSummaryReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceSummaryReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationPolicyNonComplianceSummaryReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationPolicyNonComplianceSummaryReportRequestBodyImpl();
}
