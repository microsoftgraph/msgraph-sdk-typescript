import { type DeviceEnrollmentLimitConfiguration } from './deviceEnrollmentLimitConfiguration';
import { serializeDeviceEnrollmentConfiguration } from './serializeDeviceEnrollmentConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentLimitConfiguration(writer: SerializationWriter, deviceEnrollmentLimitConfiguration: DeviceEnrollmentLimitConfiguration | undefined = {} as DeviceEnrollmentLimitConfiguration) : void {
        serializeDeviceEnrollmentConfiguration(writer, deviceEnrollmentLimitConfiguration)
        writer.writeNumberValue("limit", deviceEnrollmentLimitConfiguration.limit);
}
