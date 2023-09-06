import { deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody } from './deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody';
import { type GetDevicesWithoutCompliancePolicyReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetDevicesWithoutCompliancePolicyReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody;
}
