import {deserializeIntoScheduleItem} from './deserializeIntoScheduleItem';
import {ScheduleItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScheduleItem;
}
