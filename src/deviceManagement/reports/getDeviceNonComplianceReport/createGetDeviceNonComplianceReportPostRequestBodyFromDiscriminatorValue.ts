import { deserializeIntoGetDeviceNonComplianceReportPostRequestBody } from './deserializeIntoGetDeviceNonComplianceReportPostRequestBody';
import { type GetDeviceNonComplianceReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetDeviceNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDeviceNonComplianceReportPostRequestBody;
}
