import {deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody} from './deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody';
import {GetPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody;
}
