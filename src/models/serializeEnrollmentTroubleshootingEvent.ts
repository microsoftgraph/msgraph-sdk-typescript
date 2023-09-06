import { DeviceEnrollmentFailureReason } from './deviceEnrollmentFailureReason';
import { DeviceEnrollmentType } from './deviceEnrollmentType';
import { type EnrollmentTroubleshootingEvent } from './enrollmentTroubleshootingEvent';
import { serializeDeviceManagementTroubleshootingEvent } from './serializeDeviceManagementTroubleshootingEvent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEnrollmentTroubleshootingEvent(writer: SerializationWriter, enrollmentTroubleshootingEvent: EnrollmentTroubleshootingEvent | undefined = {} as EnrollmentTroubleshootingEvent) : void {
        serializeDeviceManagementTroubleshootingEvent(writer, enrollmentTroubleshootingEvent)
        writer.writeStringValue("deviceId", enrollmentTroubleshootingEvent.deviceId);
        writer.writeEnumValue<DeviceEnrollmentType>("enrollmentType", enrollmentTroubleshootingEvent.enrollmentType);
        writer.writeEnumValue<DeviceEnrollmentFailureReason>("failureCategory", enrollmentTroubleshootingEvent.failureCategory);
        writer.writeStringValue("failureReason", enrollmentTroubleshootingEvent.failureReason);
        writer.writeStringValue("managedDeviceIdentifier", enrollmentTroubleshootingEvent.managedDeviceIdentifier);
        writer.writeStringValue("operatingSystem", enrollmentTroubleshootingEvent.operatingSystem);
        writer.writeStringValue("osVersion", enrollmentTroubleshootingEvent.osVersion);
        writer.writeStringValue("userId", enrollmentTroubleshootingEvent.userId);
}
