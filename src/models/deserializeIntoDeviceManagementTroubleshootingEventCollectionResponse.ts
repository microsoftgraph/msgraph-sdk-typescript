import { createDeviceManagementTroubleshootingEventFromDiscriminatorValue } from './createDeviceManagementTroubleshootingEventFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceManagementTroubleshootingEvent } from './deviceManagementTroubleshootingEvent';
import { type DeviceManagementTroubleshootingEventCollectionResponse } from './deviceManagementTroubleshootingEventCollectionResponse';
import { serializeDeviceManagementTroubleshootingEvent } from './serializeDeviceManagementTroubleshootingEvent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagementTroubleshootingEventCollectionResponse(deviceManagementTroubleshootingEventCollectionResponse: DeviceManagementTroubleshootingEventCollectionResponse | undefined = {} as DeviceManagementTroubleshootingEventCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceManagementTroubleshootingEventCollectionResponse),
        "value": n => { deviceManagementTroubleshootingEventCollectionResponse.value = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingEvent>(createDeviceManagementTroubleshootingEventFromDiscriminatorValue); },
    }
}
