import { deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody } from './deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody';
import { type GetConfigurationPolicyNonComplianceReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody;
}
