import {DeviceCompliancePolicyAssignmentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyAssignmentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyAssignmentImpl();
}
