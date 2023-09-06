import { type DeviceAndAppManagementData } from './deviceAndAppManagementData';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementData(deviceAndAppManagementData: DeviceAndAppManagementData | undefined = {} as DeviceAndAppManagementData) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { deviceAndAppManagementData.content = n.getStringValue(); },
        "@odata.type": n => { deviceAndAppManagementData.odataType = n.getStringValue(); },
    }
}
