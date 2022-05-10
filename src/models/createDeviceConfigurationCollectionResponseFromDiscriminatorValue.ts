import {DeviceConfigurationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationCollectionResponseImpl();
}
