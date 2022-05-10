import {ProvisioningObjectSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningObjectSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningObjectSummaryImpl();
}
