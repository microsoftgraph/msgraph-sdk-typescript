import {GetCompliancePolicyNonComplianceSummaryReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceSummaryReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceSummaryReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceSummaryReportRequestBodyImpl();
}
