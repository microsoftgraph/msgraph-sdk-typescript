import {deserializeIntoDeviceEnrollmentConfigurationCollectionResponse} from './deserializeIntoDeviceEnrollmentConfigurationCollectionResponse';
import {DeviceEnrollmentConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentConfigurationCollectionResponse;
}
