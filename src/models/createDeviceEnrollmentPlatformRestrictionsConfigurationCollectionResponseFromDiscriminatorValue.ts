import {DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse();
}
