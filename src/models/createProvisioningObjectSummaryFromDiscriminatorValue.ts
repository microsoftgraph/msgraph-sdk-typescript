import { deserializeIntoProvisioningObjectSummary } from './deserializeIntoProvisioningObjectSummary';
import { type ProvisioningObjectSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisioningObjectSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningObjectSummary;
}
