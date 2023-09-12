import { deserializeIntoHostReputationRule } from './deserializeIntoHostReputationRule';
import { type HostReputationRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostReputationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostReputationRule;
}
