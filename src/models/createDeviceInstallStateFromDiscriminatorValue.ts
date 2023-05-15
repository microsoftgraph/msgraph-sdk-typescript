import {deserializeIntoDeviceInstallState} from './deserializeIntoDeviceInstallState';
import {DeviceInstallState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInstallStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceInstallState;
}
