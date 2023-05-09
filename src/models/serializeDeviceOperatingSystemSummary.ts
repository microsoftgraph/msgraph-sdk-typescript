import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceOperatingSystemSummary(writer: SerializationWriter, deviceOperatingSystemSummary: DeviceOperatingSystemSummary | undefined = {} as DeviceOperatingSystemSummary) : void {
        writer.writeNumberValue("androidCorporateWorkProfileCount", deviceOperatingSystemSummary.androidCorporateWorkProfileCount);
        writer.writeNumberValue("androidCount", deviceOperatingSystemSummary.androidCount);
        writer.writeNumberValue("androidDedicatedCount", deviceOperatingSystemSummary.androidDedicatedCount);
        writer.writeNumberValue("androidDeviceAdminCount", deviceOperatingSystemSummary.androidDeviceAdminCount);
        writer.writeNumberValue("androidFullyManagedCount", deviceOperatingSystemSummary.androidFullyManagedCount);
        writer.writeNumberValue("androidWorkProfileCount", deviceOperatingSystemSummary.androidWorkProfileCount);
        writer.writeNumberValue("configMgrDeviceCount", deviceOperatingSystemSummary.configMgrDeviceCount);
        writer.writeNumberValue("iosCount", deviceOperatingSystemSummary.iosCount);
        writer.writeNumberValue("macOSCount", deviceOperatingSystemSummary.macOSCount);
        writer.writeStringValue("@odata.type", deviceOperatingSystemSummary.odataType);
        writer.writeNumberValue("unknownCount", deviceOperatingSystemSummary.unknownCount);
        writer.writeNumberValue("windowsCount", deviceOperatingSystemSummary.windowsCount);
        writer.writeNumberValue("windowsMobileCount", deviceOperatingSystemSummary.windowsMobileCount);
        writer.writeAdditionalData(deviceOperatingSystemSummary.additionalData);
}
