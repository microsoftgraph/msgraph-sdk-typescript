import { deserializeIntoConditionalAccessConditionSet } from './deserializeIntoConditionalAccessConditionSet';
import { type ConditionalAccessConditionSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessConditionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessConditionSet;
}
