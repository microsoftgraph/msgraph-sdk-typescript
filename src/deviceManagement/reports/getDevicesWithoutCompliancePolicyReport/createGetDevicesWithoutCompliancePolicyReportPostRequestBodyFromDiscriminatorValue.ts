import {deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody} from './deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody';
import {GetDevicesWithoutCompliancePolicyReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDevicesWithoutCompliancePolicyReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody;
}
