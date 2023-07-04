import {deserializeIntoRuleBasedSubjectSet} from './deserializeIntoRuleBasedSubjectSet';
import {RuleBasedSubjectSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRuleBasedSubjectSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRuleBasedSubjectSet;
}
