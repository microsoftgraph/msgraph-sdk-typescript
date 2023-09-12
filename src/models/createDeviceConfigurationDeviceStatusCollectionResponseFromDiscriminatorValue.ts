import { deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse } from './deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse';
import { type DeviceConfigurationDeviceStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationDeviceStatusCollectionResponse;
}
