import {deserializeIntoOpenShiftItem} from './deserializeIntoOpenShiftItem';
import {deserializeIntoScheduleEntity} from './deserializeIntoScheduleEntity';
import {deserializeIntoShiftItem} from './deserializeIntoShiftItem';
import {deserializeIntoTimeOffItem} from './deserializeIntoTimeOffItem';
import {OpenShiftItem, ScheduleEntity, ShiftItem, TimeOffItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.openShiftItem":
                    return deserializeIntoOpenShiftItem;
                case "#microsoft.graph.shiftItem":
                    return deserializeIntoShiftItem;
                case "#microsoft.graph.timeOffItem":
                    return deserializeIntoTimeOffItem;
            }
        }
    }
    return deserializeIntoScheduleEntity;
}
