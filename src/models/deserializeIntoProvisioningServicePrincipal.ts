import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ProvisioningServicePrincipal} from './provisioningServicePrincipal';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningServicePrincipal(provisioningServicePrincipal: ProvisioningServicePrincipal | undefined = {} as ProvisioningServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(provisioningServicePrincipal),
    }
}
