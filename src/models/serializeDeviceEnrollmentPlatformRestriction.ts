import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceEnrollmentPlatformRestriction(deviceEnrollmentPlatformRestriction: DeviceEnrollmentPlatformRestriction | undefined = {} as DeviceEnrollmentPlatformRestriction, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", deviceEnrollmentPlatformRestriction.odataType);
        writer.writeStringValue("osMaximumVersion", deviceEnrollmentPlatformRestriction.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", deviceEnrollmentPlatformRestriction.osMinimumVersion);
        writer.writeBooleanValue("personalDeviceEnrollmentBlocked", deviceEnrollmentPlatformRestriction.personalDeviceEnrollmentBlocked);
        writer.writeBooleanValue("platformBlocked", deviceEnrollmentPlatformRestriction.platformBlocked);
        writer.writeAdditionalData(deviceEnrollmentPlatformRestriction.additionalData);
}
