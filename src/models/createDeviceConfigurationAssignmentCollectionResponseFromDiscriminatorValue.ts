import { deserializeIntoDeviceConfigurationAssignmentCollectionResponse } from './deserializeIntoDeviceConfigurationAssignmentCollectionResponse';
import { type DeviceConfigurationAssignmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationAssignmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationAssignmentCollectionResponse;
}
