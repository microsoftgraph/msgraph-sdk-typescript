import {DeviceConfigurationDeviceStatusCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationDeviceStatusCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationDeviceStatusCollectionResponseImpl();
}
