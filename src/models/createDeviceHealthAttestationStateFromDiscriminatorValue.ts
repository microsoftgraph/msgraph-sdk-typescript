import {deserializeIntoDeviceHealthAttestationState} from './deserializeIntoDeviceHealthAttestationState';
import {DeviceHealthAttestationState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceHealthAttestationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceHealthAttestationState;
}
