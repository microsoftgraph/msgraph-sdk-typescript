import {deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse} from './deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse';
import {DeviceConfigurationDeviceStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse;
}
