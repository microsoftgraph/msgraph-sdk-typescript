import {GetPolicyNonComplianceSummaryReportRequestBody} from './getPolicyNonComplianceSummaryReportRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceSummaryReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceSummaryReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceSummaryReportRequestBody();
}
