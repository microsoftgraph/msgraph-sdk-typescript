import {DeviceEnrollmentLimitConfiguration} from './deviceEnrollmentLimitConfiguration';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentLimitConfiguration(deviceEnrollmentLimitConfiguration: DeviceEnrollmentLimitConfiguration | undefined = {} as DeviceEnrollmentLimitConfiguration, writer: SerializationWriter) : void {
        serializeDeviceEnrollmentConfiguration(writer, deviceEnrollmentLimitConfiguration)
        writer.writeNumberValue("limit", deviceEnrollmentLimitConfiguration.limit);
}
