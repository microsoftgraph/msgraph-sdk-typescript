import { deserializeIntoDeviceHealthAttestationState } from './deserializeIntoDeviceHealthAttestationState';
import { type DeviceHealthAttestationState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceHealthAttestationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceHealthAttestationState;
}
