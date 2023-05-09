import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {DeviceEnrollmentFailureReason} from './deviceEnrollmentFailureReason';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {EnrollmentTroubleshootingEvent} from './enrollmentTroubleshootingEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEnrollmentTroubleshootingEvent(enrollmentTroubleshootingEvent: EnrollmentTroubleshootingEvent | undefined = {} as EnrollmentTroubleshootingEvent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceManagementTroubleshootingEvent(enrollmentTroubleshootingEvent),
        "deviceId": n => { enrollmentTroubleshootingEvent.deviceId = n.getStringValue(); },
        "enrollmentType": n => { enrollmentTroubleshootingEvent.enrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
        "failureCategory": n => { enrollmentTroubleshootingEvent.failureCategory = n.getEnumValue<DeviceEnrollmentFailureReason>(DeviceEnrollmentFailureReason); },
        "failureReason": n => { enrollmentTroubleshootingEvent.failureReason = n.getStringValue(); },
        "managedDeviceIdentifier": n => { enrollmentTroubleshootingEvent.managedDeviceIdentifier = n.getStringValue(); },
        "operatingSystem": n => { enrollmentTroubleshootingEvent.operatingSystem = n.getStringValue(); },
        "osVersion": n => { enrollmentTroubleshootingEvent.osVersion = n.getStringValue(); },
        "userId": n => { enrollmentTroubleshootingEvent.userId = n.getStringValue(); },
    }
}
