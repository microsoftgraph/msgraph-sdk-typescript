import {deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody} from './deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody';
import {GetCompliancePolicyNonComplianceReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetCompliancePolicyNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody;
}
