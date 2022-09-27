import {DeviceEnrollmentLimitConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentLimitConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentLimitConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentLimitConfigurationCollectionResponse();
}
