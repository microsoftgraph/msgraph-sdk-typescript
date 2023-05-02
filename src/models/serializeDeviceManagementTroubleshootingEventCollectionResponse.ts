import {DeviceManagementTroubleshootingEvent} from './deviceManagementTroubleshootingEvent';
import {DeviceManagementTroubleshootingEventCollectionResponse} from './deviceManagementTroubleshootingEventCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceManagementTroubleshootingEvent} from './serializeDeviceManagementTroubleshootingEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceManagementTroubleshootingEventCollectionResponse(writer: SerializationWriter, deviceManagementTroubleshootingEventCollectionResponse: DeviceManagementTroubleshootingEventCollectionResponse | undefined = {} as DeviceManagementTroubleshootingEventCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceManagementTroubleshootingEventCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>("value", deviceManagementTroubleshootingEventCollectionResponse.value, serializeDeviceManagementTroubleshootingEvent);
}
