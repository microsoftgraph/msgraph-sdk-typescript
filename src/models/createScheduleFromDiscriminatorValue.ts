import {deserializeIntoSchedule} from './deserializeIntoSchedule';
import {Schedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchedule;
}
