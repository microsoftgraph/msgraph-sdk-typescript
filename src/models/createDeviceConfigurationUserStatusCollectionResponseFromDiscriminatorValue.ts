import { deserializeIntoDeviceConfigurationUserStatusCollectionResponse } from './deserializeIntoDeviceConfigurationUserStatusCollectionResponse';
import { type DeviceConfigurationUserStatusCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationUserStatusCollectionResponse;
}
