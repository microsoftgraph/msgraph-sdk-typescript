import { deserializeIntoDeviceConfigurationCollectionResponse } from './deserializeIntoDeviceConfigurationCollectionResponse';
import { type DeviceConfigurationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationCollectionResponse;
}
