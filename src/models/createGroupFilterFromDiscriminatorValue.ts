import {deserializeIntoGroupFilter} from './deserializeIntoGroupFilter';
import {GroupFilter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupFilter;
}
