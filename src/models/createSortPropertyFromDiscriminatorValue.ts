import { deserializeIntoSortProperty } from './deserializeIntoSortProperty';
import { type SortProperty } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSortPropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSortProperty;
}
