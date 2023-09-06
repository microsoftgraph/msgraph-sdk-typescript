import { deserializeIntoDeviceEnrollmentConfiguration } from './deserializeIntoDeviceEnrollmentConfiguration';
import { type DeviceEnrollmentLimitConfiguration } from './deviceEnrollmentLimitConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentLimitConfiguration(deviceEnrollmentLimitConfiguration: DeviceEnrollmentLimitConfiguration | undefined = {} as DeviceEnrollmentLimitConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentLimitConfiguration),
        "limit": n => { deviceEnrollmentLimitConfiguration.limit = n.getNumberValue(); },
    }
}
