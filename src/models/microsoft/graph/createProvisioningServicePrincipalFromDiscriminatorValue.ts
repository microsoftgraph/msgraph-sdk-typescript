import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisioningServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisioningServicePrincipal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisioningServicePrincipal();
}
