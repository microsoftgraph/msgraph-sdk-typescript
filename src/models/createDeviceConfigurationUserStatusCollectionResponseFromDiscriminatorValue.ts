import {DeviceConfigurationUserStatusCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationUserStatusCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceConfigurationUserStatusCollectionResponseImpl();
}
