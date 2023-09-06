import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { createHostReputationRuleFromDiscriminatorValue } from './createHostReputationRuleFromDiscriminatorValue';
import { type HostReputation } from './hostReputation';
import { HostReputationClassification } from './hostReputationClassification';
import { type HostReputationRule } from './hostReputationRule';
import { serializeHostReputationRule } from './serializeHostReputationRule';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHostReputation(hostReputation: HostReputation | undefined = {} as HostReputation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(hostReputation),
        "classification": n => { hostReputation.classification = n.getEnumValue<HostReputationClassification>(HostReputationClassification); },
        "rules": n => { hostReputation.rules = n.getCollectionOfObjectValues<HostReputationRule>(createHostReputationRuleFromDiscriminatorValue); },
        "score": n => { hostReputation.score = n.getNumberValue(); },
    }
}
