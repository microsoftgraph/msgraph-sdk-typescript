import { type ProvisioningServicePrincipal } from './provisioningServicePrincipal';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProvisioningServicePrincipal(writer: SerializationWriter, provisioningServicePrincipal: ProvisioningServicePrincipal | undefined = {} as ProvisioningServicePrincipal) : void {
        serializeIdentity(writer, provisioningServicePrincipal)
}
