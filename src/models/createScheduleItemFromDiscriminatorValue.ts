import { deserializeIntoScheduleItem } from './deserializeIntoScheduleItem';
import { type ScheduleItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createScheduleItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScheduleItem;
}
