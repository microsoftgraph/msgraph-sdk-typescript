import {GetPolicyNonComplianceReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceReportPostRequestBodyImpl();
}
