import {GetDevicesWithoutCompliancePolicyReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDevicesWithoutCompliancePolicyReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDevicesWithoutCompliancePolicyReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDevicesWithoutCompliancePolicyReportPostRequestBody();
}
