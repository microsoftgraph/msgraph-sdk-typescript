import { deserializeIntoConditionalAccessFilter } from './deserializeIntoConditionalAccessFilter';
import { type ConditionalAccessFilter } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessFilter;
}
