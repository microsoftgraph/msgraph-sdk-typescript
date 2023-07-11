import {deserializeIntoHostReputationRule} from './deserializeIntoHostReputationRule';
import {HostReputationRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostReputationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostReputationRule;
}
