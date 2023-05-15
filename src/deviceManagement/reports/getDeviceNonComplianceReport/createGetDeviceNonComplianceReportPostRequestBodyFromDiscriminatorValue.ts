import {deserializeIntoGetDeviceNonComplianceReportPostRequestBody} from './deserializeIntoGetDeviceNonComplianceReportPostRequestBody';
import {GetDeviceNonComplianceReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDeviceNonComplianceReportPostRequestBody;
}
