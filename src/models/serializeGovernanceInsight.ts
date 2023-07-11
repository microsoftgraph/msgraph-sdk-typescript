import {GovernanceInsight} from './governanceInsight';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGovernanceInsight(writer: SerializationWriter, governanceInsight: GovernanceInsight | undefined = {} as GovernanceInsight) : void {
        serializeEntity(writer, governanceInsight)
        writer.writeDateValue("insightCreatedDateTime", governanceInsight.insightCreatedDateTime);
}
