import {deserializeIntoDeviceConfigurationCollectionResponse} from './deserializeIntoDeviceConfigurationCollectionResponse';
import {DeviceConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationCollectionResponse;
}
