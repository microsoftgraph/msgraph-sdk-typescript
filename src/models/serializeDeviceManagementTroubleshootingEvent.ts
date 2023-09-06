import { type DeviceManagementTroubleshootingEvent } from './deviceManagementTroubleshootingEvent';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingEvent(writer: SerializationWriter, deviceManagementTroubleshootingEvent: DeviceManagementTroubleshootingEvent | undefined = {} as DeviceManagementTroubleshootingEvent) : void {
        serializeEntity(writer, deviceManagementTroubleshootingEvent)
        writer.writeStringValue("correlationId", deviceManagementTroubleshootingEvent.correlationId);
        writer.writeDateValue("eventDateTime", deviceManagementTroubleshootingEvent.eventDateTime);
}
