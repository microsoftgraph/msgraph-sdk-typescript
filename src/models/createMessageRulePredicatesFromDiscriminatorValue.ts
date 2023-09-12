import { deserializeIntoMessageRulePredicates } from './deserializeIntoMessageRulePredicates';
import { type MessageRulePredicates } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMessageRulePredicatesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessageRulePredicates;
}
