import {DeviceAndAppManagementData} from './deviceAndAppManagementData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceAndAppManagementData(deviceAndAppManagementData: DeviceAndAppManagementData | undefined = {} as DeviceAndAppManagementData, writer: SerializationWriter) : void {
        writer.writeStringValue("content", deviceAndAppManagementData.content);
        writer.writeStringValue("@odata.type", deviceAndAppManagementData.odataType);
        writer.writeAdditionalData(deviceAndAppManagementData.additionalData);
}
