import {GetConfigurationPolicyNonComplianceReportResponse} from './getConfigurationPolicyNonComplianceReportResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationPolicyNonComplianceReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationPolicyNonComplianceReportResponse();
}
