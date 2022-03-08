import {GetCompliancePolicyNonComplianceSummaryReportResponse} from './getCompliancePolicyNonComplianceSummaryReportResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceSummaryReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceSummaryReportResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceSummaryReportResponse();
}
