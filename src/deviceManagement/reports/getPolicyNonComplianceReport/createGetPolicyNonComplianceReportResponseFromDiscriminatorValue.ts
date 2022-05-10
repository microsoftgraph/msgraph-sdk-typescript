import {GetPolicyNonComplianceReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceReportResponseImpl();
}
