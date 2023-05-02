import {AuthenticationProtocol} from './authenticationProtocol';
import {SamlOrWsFedProvider} from './samlOrWsFedProvider';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSamlOrWsFedProvider(writer: SerializationWriter, samlOrWsFedProvider: SamlOrWsFedProvider | undefined = {} as SamlOrWsFedProvider) : void {
        serializeIdentityProviderBase(writer, samlOrWsFedProvider)
        writer.writeStringValue("issuerUri", samlOrWsFedProvider.issuerUri);
        writer.writeStringValue("metadataExchangeUri", samlOrWsFedProvider.metadataExchangeUri);
        writer.writeStringValue("passiveSignInUri", samlOrWsFedProvider.passiveSignInUri);
        writer.writeEnumValue<AuthenticationProtocol>("preferredAuthenticationProtocol", samlOrWsFedProvider.preferredAuthenticationProtocol);
        writer.writeStringValue("signingCertificate", samlOrWsFedProvider.signingCertificate);
}
