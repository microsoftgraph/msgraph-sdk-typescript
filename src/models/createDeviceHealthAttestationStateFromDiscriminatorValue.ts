import {DeviceHealthAttestationStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceHealthAttestationStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceHealthAttestationStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceHealthAttestationStateImpl();
}
