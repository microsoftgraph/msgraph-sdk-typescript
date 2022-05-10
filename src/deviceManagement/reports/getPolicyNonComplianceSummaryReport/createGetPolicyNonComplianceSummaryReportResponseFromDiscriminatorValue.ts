import {GetPolicyNonComplianceSummaryReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceSummaryReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceSummaryReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceSummaryReportResponseImpl();
}
