import { deserializeIntoDeviceEnrollmentLimitConfiguration } from './deserializeIntoDeviceEnrollmentLimitConfiguration';
import { type DeviceEnrollmentLimitConfiguration } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceEnrollmentLimitConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceEnrollmentLimitConfiguration;
}
