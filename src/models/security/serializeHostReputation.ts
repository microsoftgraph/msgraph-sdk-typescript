import {serializeEntity} from '../serializeEntity';
import {HostReputation} from './hostReputation';
import {HostReputationClassification} from './hostReputationClassification';
import {HostReputationRule} from './hostReputationRule';
import {serializeHostReputationRule} from './serializeHostReputationRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostReputation(writer: SerializationWriter, hostReputation: HostReputation | undefined = {} as HostReputation) : void {
        serializeEntity(writer, hostReputation)
        writer.writeEnumValue<HostReputationClassification>("classification", hostReputation.classification);
        writer.writeCollectionOfObjectValues<HostReputationRule>("rules", hostReputation.rules, serializeHostReputationRule);
        writer.writeNumberValue("score", hostReputation.score);
}
