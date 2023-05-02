import {deserializeIntoConditionalAccessConditionSet} from './deserializeIntoConditionalAccessConditionSet';
import {ConditionalAccessConditionSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessConditionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessConditionSet;
}
