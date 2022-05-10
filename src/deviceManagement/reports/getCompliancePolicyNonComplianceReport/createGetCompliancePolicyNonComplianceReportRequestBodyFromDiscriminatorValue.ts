import {GetCompliancePolicyNonComplianceReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetCompliancePolicyNonComplianceReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetCompliancePolicyNonComplianceReportRequestBodyImpl();
}
