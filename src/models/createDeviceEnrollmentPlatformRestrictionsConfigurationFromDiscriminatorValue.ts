import { deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration } from './deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration';
import { type DeviceEnrollmentPlatformRestrictionsConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentPlatformRestrictionsConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration;
}
