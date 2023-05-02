import {deserializeIntoProvisioningObjectSummaryCollectionResponse} from './deserializeIntoProvisioningObjectSummaryCollectionResponse';
import {ProvisioningObjectSummaryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningObjectSummaryCollectionResponse;
}
