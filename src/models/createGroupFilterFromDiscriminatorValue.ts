import { deserializeIntoGroupFilter } from './deserializeIntoGroupFilter';
import { type GroupFilter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupFilter;
}
