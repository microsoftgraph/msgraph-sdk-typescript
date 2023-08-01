import type {DeviceAndAppManagementData} from './deviceAndAppManagementData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceAndAppManagementData(deviceAndAppManagementData: DeviceAndAppManagementData | undefined = {} as DeviceAndAppManagementData) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { deviceAndAppManagementData.content = n.getStringValue(); },
        "@odata.type": n => { deviceAndAppManagementData.odataType = n.getStringValue(); },
    }
}
