import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceOperatingSystemSummary(deviceOperatingSystemSummary: DeviceOperatingSystemSummary | undefined = {} as DeviceOperatingSystemSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "androidCorporateWorkProfileCount": n => { deviceOperatingSystemSummary.androidCorporateWorkProfileCount = n.getNumberValue(); },
        "androidCount": n => { deviceOperatingSystemSummary.androidCount = n.getNumberValue(); },
        "androidDedicatedCount": n => { deviceOperatingSystemSummary.androidDedicatedCount = n.getNumberValue(); },
        "androidDeviceAdminCount": n => { deviceOperatingSystemSummary.androidDeviceAdminCount = n.getNumberValue(); },
        "androidFullyManagedCount": n => { deviceOperatingSystemSummary.androidFullyManagedCount = n.getNumberValue(); },
        "androidWorkProfileCount": n => { deviceOperatingSystemSummary.androidWorkProfileCount = n.getNumberValue(); },
        "configMgrDeviceCount": n => { deviceOperatingSystemSummary.configMgrDeviceCount = n.getNumberValue(); },
        "iosCount": n => { deviceOperatingSystemSummary.iosCount = n.getNumberValue(); },
        "macOSCount": n => { deviceOperatingSystemSummary.macOSCount = n.getNumberValue(); },
        "@odata.type": n => { deviceOperatingSystemSummary.odataType = n.getStringValue(); },
        "unknownCount": n => { deviceOperatingSystemSummary.unknownCount = n.getNumberValue(); },
        "windowsCount": n => { deviceOperatingSystemSummary.windowsCount = n.getNumberValue(); },
        "windowsMobileCount": n => { deviceOperatingSystemSummary.windowsMobileCount = n.getNumberValue(); },
    }
}
