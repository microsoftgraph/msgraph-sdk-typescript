import {GetDeviceNonComplianceReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceNonComplianceReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceNonComplianceReportRequestBodyImpl();
}
