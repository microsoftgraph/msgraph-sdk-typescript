import {deserializeIntoFilterGroup} from './deserializeIntoFilterGroup';
import {FilterGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilterGroup;
}
