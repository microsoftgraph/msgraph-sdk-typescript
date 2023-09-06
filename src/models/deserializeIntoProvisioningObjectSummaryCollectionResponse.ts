import { createProvisioningObjectSummaryFromDiscriminatorValue } from './createProvisioningObjectSummaryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ProvisioningObjectSummary } from './provisioningObjectSummary';
import { type ProvisioningObjectSummaryCollectionResponse } from './provisioningObjectSummaryCollectionResponse';
import { serializeProvisioningObjectSummary } from './serializeProvisioningObjectSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningObjectSummaryCollectionResponse(provisioningObjectSummaryCollectionResponse: ProvisioningObjectSummaryCollectionResponse | undefined = {} as ProvisioningObjectSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(provisioningObjectSummaryCollectionResponse),
        "value": n => { provisioningObjectSummaryCollectionResponse.value = n.getCollectionOfObjectValues<ProvisioningObjectSummary>(createProvisioningObjectSummaryFromDiscriminatorValue); },
    }
}
