import { deserializeIntoDeviceCompliancePolicyState } from './deserializeIntoDeviceCompliancePolicyState';
import { type DeviceCompliancePolicyState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyState;
}
