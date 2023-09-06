import { type GovernanceInsight } from './governanceInsight';
import { type GovernanceInsightCollectionResponse } from './governanceInsightCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeGovernanceInsight } from './serializeGovernanceInsight';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGovernanceInsightCollectionResponse(writer: SerializationWriter, governanceInsightCollectionResponse: GovernanceInsightCollectionResponse | undefined = {} as GovernanceInsightCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, governanceInsightCollectionResponse)
        writer.writeCollectionOfObjectValues<GovernanceInsight>("value", governanceInsightCollectionResponse.value, serializeGovernanceInsight);
}
