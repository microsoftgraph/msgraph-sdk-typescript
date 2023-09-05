import { deserializeIntoIdentity } from './deserializeIntoIdentity';
import { type ProvisioningServicePrincipal } from './provisioningServicePrincipal';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningServicePrincipal(provisioningServicePrincipal: ProvisioningServicePrincipal | undefined = {} as ProvisioningServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisioningServicePrincipal),
    }
}
