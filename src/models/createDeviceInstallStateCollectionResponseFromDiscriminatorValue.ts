import {DeviceInstallStateCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInstallStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceInstallStateCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceInstallStateCollectionResponseImpl();
}
