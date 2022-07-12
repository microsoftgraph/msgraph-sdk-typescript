import {ScheduleEntity, ShiftItem, TimeOffItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleEntity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.shiftItem":
                    return new ShiftItem();
                case "#microsoft.graph.timeOffItem":
                    return new TimeOffItem();
            }
        }
    }
    return new ScheduleEntity();
}
