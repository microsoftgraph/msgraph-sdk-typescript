import {GetConfigurationPolicyNonComplianceReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationPolicyNonComplianceReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationPolicyNonComplianceReportPostRequestBodyImpl();
}
