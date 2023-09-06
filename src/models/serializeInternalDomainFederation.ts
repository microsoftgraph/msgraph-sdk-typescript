import { FederatedIdpMfaBehavior } from './federatedIdpMfaBehavior';
import { type InternalDomainFederation } from './internalDomainFederation';
import { PromptLoginBehavior } from './promptLoginBehavior';
import { serializeSamlOrWsFedProvider } from './serializeSamlOrWsFedProvider';
import { serializeSigningCertificateUpdateStatus } from './serializeSigningCertificateUpdateStatus';
import { type SigningCertificateUpdateStatus } from './signingCertificateUpdateStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInternalDomainFederation(writer: SerializationWriter, internalDomainFederation: InternalDomainFederation | undefined = {} as InternalDomainFederation) : void {
        serializeSamlOrWsFedProvider(writer, internalDomainFederation)
        writer.writeStringValue("activeSignInUri", internalDomainFederation.activeSignInUri);
        writer.writeEnumValue<FederatedIdpMfaBehavior>("federatedIdpMfaBehavior", internalDomainFederation.federatedIdpMfaBehavior);
        writer.writeBooleanValue("isSignedAuthenticationRequestRequired", internalDomainFederation.isSignedAuthenticationRequestRequired);
        writer.writeStringValue("nextSigningCertificate", internalDomainFederation.nextSigningCertificate);
        writer.writeEnumValue<PromptLoginBehavior>("promptLoginBehavior", internalDomainFederation.promptLoginBehavior);
        writer.writeObjectValue<SigningCertificateUpdateStatus>("signingCertificateUpdateStatus", internalDomainFederation.signingCertificateUpdateStatus, serializeSigningCertificateUpdateStatus);
        writer.writeStringValue("signOutUri", internalDomainFederation.signOutUri);
}
