import { type ProvisioningObjectSummary } from './provisioningObjectSummary';
import { type ProvisioningObjectSummaryCollectionResponse } from './provisioningObjectSummaryCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeProvisioningObjectSummary } from './serializeProvisioningObjectSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProvisioningObjectSummaryCollectionResponse(writer: SerializationWriter, provisioningObjectSummaryCollectionResponse: ProvisioningObjectSummaryCollectionResponse | undefined = {} as ProvisioningObjectSummaryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, provisioningObjectSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("value", provisioningObjectSummaryCollectionResponse.value, serializeProvisioningObjectSummary);
}
