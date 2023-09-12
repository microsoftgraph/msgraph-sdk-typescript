import { deserializeIntoSubjectSet } from '../deserializeIntoSubjectSet';
import { type RuleBasedSubjectSet } from './ruleBasedSubjectSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRuleBasedSubjectSet(ruleBasedSubjectSet: RuleBasedSubjectSet | undefined = {} as RuleBasedSubjectSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(ruleBasedSubjectSet),
        "rule": n => { ruleBasedSubjectSet.rule = n.getStringValue(); },
    }
}
