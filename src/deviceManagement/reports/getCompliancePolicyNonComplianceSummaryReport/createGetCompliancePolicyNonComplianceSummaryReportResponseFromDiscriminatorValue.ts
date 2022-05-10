import {GetCompliancePolicyNonComplianceSummaryReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceSummaryReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceSummaryReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceSummaryReportResponseImpl();
}
