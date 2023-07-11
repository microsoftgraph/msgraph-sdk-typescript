import {AuthenticationProtocol} from './authenticationProtocol';
import {IdentityProviderBase} from './identityProviderBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SamlOrWsFedProvider extends IdentityProviderBase, Parsable {
    /**
     * Issuer URI of the federation server.
     */
    issuerUri?: string | undefined;
    /**
     * URI of the metadata exchange endpoint used for authentication from rich client applications.
     */
    metadataExchangeUri?: string | undefined;
    /**
     * URI that web-based clients are directed to when signing in to Azure Active Directory (Azure AD) services.
     */
    passiveSignInUri?: string | undefined;
    /**
     * Preferred authentication protocol. The possible values are: wsFed, saml, unknownFutureValue.
     */
    preferredAuthenticationProtocol?: AuthenticationProtocol | undefined;
    /**
     * Current certificate used to sign tokens passed to the Microsoft identity platform. The certificate is formatted as a Base64 encoded string of the public portion of the federated IdP's token signing certificate and must be compatible with the X509Certificate2 class.   This property is used in the following scenarios:  if a rollover is required outside of the autorollover update a new federation service is being set up  if the new token signing certificate isn't present in the federation properties after the federation service certificate has been updated.   Azure AD updates certificates via an autorollover process in which it attempts to retrieve a new certificate from the federation service metadata, 30 days before expiry of the current certificate. If a new certificate isn't available, Azure AD monitors the metadata daily and will update the federation settings for the domain when a new certificate is available.
     */
    signingCertificate?: string | undefined;
}
