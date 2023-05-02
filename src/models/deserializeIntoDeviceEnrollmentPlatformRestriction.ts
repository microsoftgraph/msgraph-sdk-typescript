import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentPlatformRestriction(deviceEnrollmentPlatformRestriction: DeviceEnrollmentPlatformRestriction | undefined = {} as DeviceEnrollmentPlatformRestriction) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { deviceEnrollmentPlatformRestriction.odataType = n.getStringValue(); },
        "osMaximumVersion": n => { deviceEnrollmentPlatformRestriction.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { deviceEnrollmentPlatformRestriction.osMinimumVersion = n.getStringValue(); },
        "personalDeviceEnrollmentBlocked": n => { deviceEnrollmentPlatformRestriction.personalDeviceEnrollmentBlocked = n.getBooleanValue(); },
        "platformBlocked": n => { deviceEnrollmentPlatformRestriction.platformBlocked = n.getBooleanValue(); },
    }
}
