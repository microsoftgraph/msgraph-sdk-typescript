import type {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import type {DeviceComplianceActionItemCollectionResponse} from './deviceComplianceActionItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceActionItemCollectionResponse(writer: SerializationWriter, deviceComplianceActionItemCollectionResponse: DeviceComplianceActionItemCollectionResponse | undefined = {} as DeviceComplianceActionItemCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceActionItemCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItem>("value", deviceComplianceActionItemCollectionResponse.value, serializeDeviceComplianceActionItem);
}
