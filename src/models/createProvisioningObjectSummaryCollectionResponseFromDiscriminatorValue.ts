import { deserializeIntoProvisioningObjectSummaryCollectionResponse } from './deserializeIntoProvisioningObjectSummaryCollectionResponse';
import { type ProvisioningObjectSummaryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningObjectSummaryCollectionResponse;
}
