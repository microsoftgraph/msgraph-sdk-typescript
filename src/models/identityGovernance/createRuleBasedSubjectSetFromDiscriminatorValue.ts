import { deserializeIntoRuleBasedSubjectSet } from './deserializeIntoRuleBasedSubjectSet';
import { type RuleBasedSubjectSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRuleBasedSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRuleBasedSubjectSet;
}
