import {ActionState} from './actionState';
import {DeviceActionResult} from './deviceActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceActionResult(deviceActionResult: DeviceActionResult | undefined = {} as DeviceActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        "actionName": n => { deviceActionResult.actionName = n.getStringValue(); },
        "actionState": n => { deviceActionResult.actionState = n.getEnumValue<ActionState>(ActionState); },
        "lastUpdatedDateTime": n => { deviceActionResult.lastUpdatedDateTime = n.getDateValue(); },
        "@odata.type": n => { deviceActionResult.odataType = n.getStringValue(); },
        "startDateTime": n => { deviceActionResult.startDateTime = n.getDateValue(); },
    }
}
