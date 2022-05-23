import {DeviceConfigurationStateCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationStateCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationStateCollectionResponseImpl();
}
