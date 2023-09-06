import { type DeviceEnrollmentPlatformRestriction } from './deviceEnrollmentPlatformRestriction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentPlatformRestriction(writer: SerializationWriter, deviceEnrollmentPlatformRestriction: DeviceEnrollmentPlatformRestriction | undefined = {} as DeviceEnrollmentPlatformRestriction) : void {
        writer.writeStringValue("@odata.type", deviceEnrollmentPlatformRestriction.odataType);
        writer.writeStringValue("osMaximumVersion", deviceEnrollmentPlatformRestriction.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", deviceEnrollmentPlatformRestriction.osMinimumVersion);
        writer.writeBooleanValue("personalDeviceEnrollmentBlocked", deviceEnrollmentPlatformRestriction.personalDeviceEnrollmentBlocked);
        writer.writeBooleanValue("platformBlocked", deviceEnrollmentPlatformRestriction.platformBlocked);
        writer.writeAdditionalData(deviceEnrollmentPlatformRestriction.additionalData);
}
