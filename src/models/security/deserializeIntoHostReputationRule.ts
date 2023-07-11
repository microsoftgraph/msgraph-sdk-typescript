import {HostReputationRule} from './hostReputationRule';
import {HostReputationRuleSeverity} from './hostReputationRuleSeverity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostReputationRule(hostReputationRule: HostReputationRule | undefined = {} as HostReputationRule) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { hostReputationRule.description = n.getStringValue(); },
        "name": n => { hostReputationRule.name = n.getStringValue(); },
        "@odata.type": n => { hostReputationRule.odataType = n.getStringValue(); },
        "relatedDetailsUrl": n => { hostReputationRule.relatedDetailsUrl = n.getStringValue(); },
        "severity": n => { hostReputationRule.severity = n.getEnumValue<HostReputationRuleSeverity>(HostReputationRuleSeverity); },
    }
}
