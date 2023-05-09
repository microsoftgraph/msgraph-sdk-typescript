import {deserializeIntoProvisioningServicePrincipal} from './deserializeIntoProvisioningServicePrincipal';
import {ProvisioningServicePrincipal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProvisioningServicePrincipal;
}
