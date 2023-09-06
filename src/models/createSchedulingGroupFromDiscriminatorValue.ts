import { deserializeIntoSchedulingGroup } from './deserializeIntoSchedulingGroup';
import { type SchedulingGroup } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSchedulingGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchedulingGroup;
}
