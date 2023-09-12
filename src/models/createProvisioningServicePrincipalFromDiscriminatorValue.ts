import { deserializeIntoProvisioningServicePrincipal } from './deserializeIntoProvisioningServicePrincipal';
import { type ProvisioningServicePrincipal } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProvisioningServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningServicePrincipal;
}
