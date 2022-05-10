import {SchedulingGroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchedulingGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchedulingGroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchedulingGroupImpl();
}
