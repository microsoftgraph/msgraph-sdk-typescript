import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './deviceEnrollmentPlatformRestrictionsConfiguration';
import {serializeDeviceEnrollmentConfiguration} from './serializeDeviceEnrollmentConfiguration';
import {serializeDeviceEnrollmentPlatformRestriction} from './serializeDeviceEnrollmentPlatformRestriction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentPlatformRestrictionsConfiguration(writer: SerializationWriter, deviceEnrollmentPlatformRestrictionsConfiguration: DeviceEnrollmentPlatformRestrictionsConfiguration | undefined = {} as DeviceEnrollmentPlatformRestrictionsConfiguration) : void {
        serializeDeviceEnrollmentConfiguration(writer, deviceEnrollmentPlatformRestrictionsConfiguration)
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("androidRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.androidRestriction, serializeDeviceEnrollmentPlatformRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("iosRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.iosRestriction, serializeDeviceEnrollmentPlatformRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("macOSRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.macOSRestriction, serializeDeviceEnrollmentPlatformRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("windowsMobileRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.windowsMobileRestriction, serializeDeviceEnrollmentPlatformRestriction);
        writer.writeObjectValue<DeviceEnrollmentPlatformRestriction>("windowsRestriction", deviceEnrollmentPlatformRestrictionsConfiguration.windowsRestriction, serializeDeviceEnrollmentPlatformRestriction);
}
