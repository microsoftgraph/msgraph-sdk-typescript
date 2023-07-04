import {serializeSubjectSet} from '../serializeSubjectSet';
import {RuleBasedSubjectSet} from './ruleBasedSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRuleBasedSubjectSet(writer: SerializationWriter, ruleBasedSubjectSet: RuleBasedSubjectSet | undefined = {} as RuleBasedSubjectSet) : void {
        serializeSubjectSet(writer, ruleBasedSubjectSet)
        writer.writeStringValue("rule", ruleBasedSubjectSet.rule);
}
