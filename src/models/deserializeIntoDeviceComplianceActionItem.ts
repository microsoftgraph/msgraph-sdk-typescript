import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceActionItem} from './deviceComplianceActionItem';
import {DeviceComplianceActionType} from './deviceComplianceActionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceActionItem(deviceComplianceActionItem: DeviceComplianceActionItem | undefined = {} as DeviceComplianceActionItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceActionItem),
        "actionType": n => { deviceComplianceActionItem.actionType = n.getEnumValue<DeviceComplianceActionType>(DeviceComplianceActionType); },
        "gracePeriodHours": n => { deviceComplianceActionItem.gracePeriodHours = n.getNumberValue(); },
        "notificationMessageCCList": n => { deviceComplianceActionItem.notificationMessageCCList = n.getCollectionOfPrimitiveValues<string>(); },
        "notificationTemplateId": n => { deviceComplianceActionItem.notificationTemplateId = n.getStringValue(); },
    }
}
