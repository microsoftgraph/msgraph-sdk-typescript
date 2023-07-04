import {deserializeIntoTriggerAndScopeBasedConditions} from './deserializeIntoTriggerAndScopeBasedConditions';
import {TriggerAndScopeBasedConditions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTriggerAndScopeBasedConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTriggerAndScopeBasedConditions;
}
