import {DeviceManagementSettings} from './deviceManagementSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementSettings(deviceManagementSettings: DeviceManagementSettings | undefined = {} as DeviceManagementSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceComplianceCheckinThresholdDays": n => { deviceManagementSettings.deviceComplianceCheckinThresholdDays = n.getNumberValue(); },
        "isScheduledActionEnabled": n => { deviceManagementSettings.isScheduledActionEnabled = n.getBooleanValue(); },
        "@odata.type": n => { deviceManagementSettings.odataType = n.getStringValue(); },
        "secureByDefault": n => { deviceManagementSettings.secureByDefault = n.getBooleanValue(); },
    }
}
