import {deserializeIntoDeviceConfigurationUserStatusCollectionResponse} from './deserializeIntoDeviceConfigurationUserStatusCollectionResponse';
import {DeviceConfigurationUserStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationUserStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceConfigurationUserStatusCollectionResponse;
}
