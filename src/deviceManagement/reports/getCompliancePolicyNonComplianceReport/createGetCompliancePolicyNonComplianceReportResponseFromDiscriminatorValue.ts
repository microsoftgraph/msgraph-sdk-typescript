import {GetCompliancePolicyNonComplianceReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceReportResponseImpl();
}
