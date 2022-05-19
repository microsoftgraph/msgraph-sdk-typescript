import {GetDeviceNonComplianceReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceNonComplianceReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceNonComplianceReportPostRequestBody();
}
