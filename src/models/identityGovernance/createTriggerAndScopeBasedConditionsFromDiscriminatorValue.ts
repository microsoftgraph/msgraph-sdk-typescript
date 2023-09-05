import { deserializeIntoTriggerAndScopeBasedConditions } from './deserializeIntoTriggerAndScopeBasedConditions';
import { type TriggerAndScopeBasedConditions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTriggerAndScopeBasedConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTriggerAndScopeBasedConditions;
}
