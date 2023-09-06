import { deserializeIntoScheduleEntity } from './deserializeIntoScheduleEntity';
import { type TimeOffItem } from './timeOffItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffItem(timeOffItem: TimeOffItem | undefined = {} as TimeOffItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleEntity(timeOffItem),
        "timeOffReasonId": n => { timeOffItem.timeOffReasonId = n.getStringValue(); },
    }
}
