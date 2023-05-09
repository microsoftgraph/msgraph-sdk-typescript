import {createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue} from './createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue';
import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './deviceEnrollmentPlatformRestrictionsConfiguration';
import {serializeDeviceEnrollmentPlatformRestriction} from './serializeDeviceEnrollmentPlatformRestriction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceEnrollmentPlatformRestrictionsConfiguration(deviceEnrollmentPlatformRestrictionsConfiguration: DeviceEnrollmentPlatformRestrictionsConfiguration | undefined = {} as DeviceEnrollmentPlatformRestrictionsConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceEnrollmentConfiguration(deviceEnrollmentPlatformRestrictionsConfiguration),
        "androidRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.androidRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
        "iosRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.iosRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
        "macOSRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.macOSRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
        "windowsMobileRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.windowsMobileRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
        "windowsRestriction": n => { deviceEnrollmentPlatformRestrictionsConfiguration.windowsRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestriction>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
    }
}
