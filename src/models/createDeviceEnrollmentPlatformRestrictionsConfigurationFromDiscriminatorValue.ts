import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionsConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceEnrollmentPlatformRestrictionsConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceEnrollmentPlatformRestrictionsConfiguration();
}
