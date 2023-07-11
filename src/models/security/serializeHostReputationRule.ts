import {HostReputationRule} from './hostReputationRule';
import {HostReputationRuleSeverity} from './hostReputationRuleSeverity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostReputationRule(writer: SerializationWriter, hostReputationRule: HostReputationRule | undefined = {} as HostReputationRule) : void {
        writer.writeStringValue("description", hostReputationRule.description);
        writer.writeStringValue("name", hostReputationRule.name);
        writer.writeStringValue("@odata.type", hostReputationRule.odataType);
        writer.writeStringValue("relatedDetailsUrl", hostReputationRule.relatedDetailsUrl);
        writer.writeEnumValue<HostReputationRuleSeverity>("severity", hostReputationRule.severity);
        writer.writeAdditionalData(hostReputationRule.additionalData);
}
