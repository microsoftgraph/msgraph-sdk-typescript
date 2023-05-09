import {deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration} from './deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration';
import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionsConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration;
}
