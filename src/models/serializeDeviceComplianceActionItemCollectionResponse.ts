import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceActionItemCollectionResponse} from './deviceComplianceActionItemCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceComplianceActionItem} from './serializeDeviceComplianceActionItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceActionItemCollectionResponse(deviceComplianceActionItemCollectionResponse: DeviceComplianceActionItemCollectionResponse | undefined = {} as DeviceComplianceActionItemCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceComplianceActionItemCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceComplianceActionItem>("value", deviceComplianceActionItemCollectionResponse.value, serializeDeviceComplianceActionItem);
}
