import { deserializeIntoDeviceConfigurationStateCollectionResponse } from './deserializeIntoDeviceConfigurationStateCollectionResponse';
import { type DeviceConfigurationStateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationStateCollectionResponse;
}
