import {deserializeIntoDeviceInstallStateCollectionResponse} from './deserializeIntoDeviceInstallStateCollectionResponse';
import {DeviceInstallStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceInstallStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceInstallStateCollectionResponse;
}
