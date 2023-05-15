import {deserializeIntoSchedulingGroup} from './deserializeIntoSchedulingGroup';
import {SchedulingGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchedulingGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchedulingGroup;
}
