import { type GovernanceInsight } from './governanceInsight';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGovernanceInsight(writer: SerializationWriter, governanceInsight: GovernanceInsight | undefined = {} as GovernanceInsight) : void {
        serializeEntity(writer, governanceInsight)
        writer.writeDateValue("insightCreatedDateTime", governanceInsight.insightCreatedDateTime);
}
