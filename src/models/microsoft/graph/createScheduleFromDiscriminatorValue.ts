import {Schedule} from './schedule';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Schedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Schedule();
}
