import {ScheduleImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleImpl();
}
