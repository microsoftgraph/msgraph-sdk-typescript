import {DeviceManagementSettings} from './deviceManagementSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementSettings(writer: SerializationWriter, deviceManagementSettings: DeviceManagementSettings | undefined = {} as DeviceManagementSettings) : void {
        writer.writeNumberValue("deviceComplianceCheckinThresholdDays", deviceManagementSettings.deviceComplianceCheckinThresholdDays);
        writer.writeBooleanValue("isScheduledActionEnabled", deviceManagementSettings.isScheduledActionEnabled);
        writer.writeStringValue("@odata.type", deviceManagementSettings.odataType);
        writer.writeBooleanValue("secureByDefault", deviceManagementSettings.secureByDefault);
        writer.writeAdditionalData(deviceManagementSettings.additionalData);
}
