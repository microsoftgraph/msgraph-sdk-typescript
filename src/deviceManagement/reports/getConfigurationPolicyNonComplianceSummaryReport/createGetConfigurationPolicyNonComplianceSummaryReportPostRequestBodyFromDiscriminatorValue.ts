import {deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody} from './deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody';
import {GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody;
}
