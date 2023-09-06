import { serializeSubjectSet } from '../serializeSubjectSet';
import { type RuleBasedSubjectSet } from './ruleBasedSubjectSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRuleBasedSubjectSet(writer: SerializationWriter, ruleBasedSubjectSet: RuleBasedSubjectSet | undefined = {} as RuleBasedSubjectSet) : void {
        serializeSubjectSet(writer, ruleBasedSubjectSet)
        writer.writeStringValue("rule", ruleBasedSubjectSet.rule);
}
