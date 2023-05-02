import {deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody} from './deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody';
import {GetConfigurationPolicyNonComplianceReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody;
}
