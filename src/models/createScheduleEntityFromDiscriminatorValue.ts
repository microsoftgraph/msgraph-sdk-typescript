import {ScheduleEntityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleEntityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleEntityImpl();
}
