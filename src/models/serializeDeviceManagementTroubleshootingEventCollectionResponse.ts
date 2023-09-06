import { type DeviceManagementTroubleshootingEvent } from './deviceManagementTroubleshootingEvent';
import { type DeviceManagementTroubleshootingEventCollectionResponse } from './deviceManagementTroubleshootingEventCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceManagementTroubleshootingEvent } from './serializeDeviceManagementTroubleshootingEvent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingEventCollectionResponse(writer: SerializationWriter, deviceManagementTroubleshootingEventCollectionResponse: DeviceManagementTroubleshootingEventCollectionResponse | undefined = {} as DeviceManagementTroubleshootingEventCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementTroubleshootingEventCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("value", deviceManagementTroubleshootingEventCollectionResponse.value, serializeDeviceManagementTroubleshootingEvent);
}
