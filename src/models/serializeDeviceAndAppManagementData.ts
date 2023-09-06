import { type DeviceAndAppManagementData } from './deviceAndAppManagementData';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementData(writer: SerializationWriter, deviceAndAppManagementData: DeviceAndAppManagementData | undefined = {} as DeviceAndAppManagementData) : void {
        writer.writeStringValue("content", deviceAndAppManagementData.content);
        writer.writeStringValue("@odata.type", deviceAndAppManagementData.odataType);
        writer.writeAdditionalData(deviceAndAppManagementData.additionalData);
}
