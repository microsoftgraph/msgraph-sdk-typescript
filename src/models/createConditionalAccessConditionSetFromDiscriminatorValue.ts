import {ConditionalAccessConditionSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessConditionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessConditionSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessConditionSetImpl();
}
