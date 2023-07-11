import {deserializeIntoSubjectSet} from '../deserializeIntoSubjectSet';
import {RuleBasedSubjectSet} from './ruleBasedSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRuleBasedSubjectSet(ruleBasedSubjectSet: RuleBasedSubjectSet | undefined = {} as RuleBasedSubjectSet) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(ruleBasedSubjectSet),
        "rule": n => { ruleBasedSubjectSet.rule = n.getStringValue(); },
    }
}
