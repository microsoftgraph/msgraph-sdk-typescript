import { deserializeIntoFilter } from './deserializeIntoFilter';
import { type Filter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFilter;
}
