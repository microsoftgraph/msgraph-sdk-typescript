import {GovernanceInsight} from './governanceInsight';
import {GovernanceInsightCollectionResponse} from './governanceInsightCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGovernanceInsight} from './serializeGovernanceInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGovernanceInsightCollectionResponse(writer: SerializationWriter, governanceInsightCollectionResponse: GovernanceInsightCollectionResponse | undefined = {} as GovernanceInsightCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, governanceInsightCollectionResponse)
        writer.writeCollectionOfObjectValues<GovernanceInsight>("value", governanceInsightCollectionResponse.value, serializeGovernanceInsight);
}
