import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceManagementTroubleshootingEvent } from './deviceManagementTroubleshootingEvent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingEvent(deviceManagementTroubleshootingEvent: DeviceManagementTroubleshootingEvent | undefined = {} as DeviceManagementTroubleshootingEvent) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagementTroubleshootingEvent),
        "correlationId": n => { deviceManagementTroubleshootingEvent.correlationId = n.getStringValue(); },
        "eventDateTime": n => { deviceManagementTroubleshootingEvent.eventDateTime = n.getDateValue(); },
    }
}
