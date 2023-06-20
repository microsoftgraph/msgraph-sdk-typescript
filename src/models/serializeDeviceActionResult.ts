import {ActionState} from './actionState';
import {DeviceActionResult} from './deviceActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceActionResult(deviceActionResult: DeviceActionResult | undefined = {} as DeviceActionResult, writer: SerializationWriter) : void {
        writer.writeStringValue("actionName", deviceActionResult.actionName);
        writer.writeEnumValue<ActionState>("actionState", deviceActionResult.actionState);
        writer.writeDateValue("lastUpdatedDateTime", deviceActionResult.lastUpdatedDateTime);
        writer.writeStringValue("@odata.type", deviceActionResult.odataType);
        writer.writeDateValue("startDateTime", deviceActionResult.startDateTime);
        writer.writeAdditionalData(deviceActionResult.additionalData);
}
