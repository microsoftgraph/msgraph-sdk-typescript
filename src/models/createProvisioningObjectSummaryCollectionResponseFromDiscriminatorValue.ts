import {ProvisioningObjectSummaryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningObjectSummaryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningObjectSummaryCollectionResponseImpl();
}
