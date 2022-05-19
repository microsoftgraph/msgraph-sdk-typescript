import {GetPolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceSummaryReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceSummaryReportPostRequestBody();
}
