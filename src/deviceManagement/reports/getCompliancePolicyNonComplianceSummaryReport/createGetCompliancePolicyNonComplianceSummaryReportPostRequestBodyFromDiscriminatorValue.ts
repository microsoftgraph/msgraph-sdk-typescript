import {GetCompliancePolicyNonComplianceSummaryReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceSummaryReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceSummaryReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceSummaryReportPostRequestBody();
}
