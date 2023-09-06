import { deserializeIntoGetPolicyNonComplianceReportPostRequestBody } from './deserializeIntoGetPolicyNonComplianceReportPostRequestBody';
import { type GetPolicyNonComplianceReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPolicyNonComplianceReportPostRequestBody;
}
