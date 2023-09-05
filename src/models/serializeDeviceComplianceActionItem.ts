import { type DeviceComplianceActionItem } from './deviceComplianceActionItem';
import { DeviceComplianceActionType } from './deviceComplianceActionType';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceActionItem(writer: SerializationWriter, deviceComplianceActionItem: DeviceComplianceActionItem | undefined = {} as DeviceComplianceActionItem) : void {
        serializeEntity(writer, deviceComplianceActionItem)
        writer.writeEnumValue<DeviceComplianceActionType>("actionType", deviceComplianceActionItem.actionType);
        writer.writeNumberValue("gracePeriodHours", deviceComplianceActionItem.gracePeriodHours);
        writer.writeCollectionOfPrimitiveValues<string>("notificationMessageCCList", deviceComplianceActionItem.notificationMessageCCList);
        writer.writeStringValue("notificationTemplateId", deviceComplianceActionItem.notificationTemplateId);
}
