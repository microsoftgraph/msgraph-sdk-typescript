import {deserializeIntoProvisioningObjectSummary} from './deserializeIntoProvisioningObjectSummary';
import {ProvisioningObjectSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningObjectSummary;
}
