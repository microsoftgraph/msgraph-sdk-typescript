import {createGovernanceInsightFromDiscriminatorValue} from './createGovernanceInsightFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {GovernanceInsight} from './governanceInsight';
import type {GovernanceInsightCollectionResponse} from './governanceInsightCollectionResponse';
import {serializeGovernanceInsight} from './serializeGovernanceInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGovernanceInsightCollectionResponse(governanceInsightCollectionResponse: GovernanceInsightCollectionResponse | undefined = {} as GovernanceInsightCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(governanceInsightCollectionResponse),
        "value": n => { governanceInsightCollectionResponse.value = n.getCollectionOfObjectValues<GovernanceInsight>(createGovernanceInsightFromDiscriminatorValue); },
    }
}
