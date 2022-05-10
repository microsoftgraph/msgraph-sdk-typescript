import {DeviceInstallStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInstallStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceInstallStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceInstallStateImpl();
}
