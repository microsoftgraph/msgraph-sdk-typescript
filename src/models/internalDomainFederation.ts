import {FederatedIdpMfaBehavior} from './federatedIdpMfaBehavior';
import {PromptLoginBehavior} from './promptLoginBehavior';
import {SamlOrWsFedProvider} from './samlOrWsFedProvider';
import {SigningCertificateUpdateStatus} from './signingCertificateUpdateStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InternalDomainFederation extends Parsable, SamlOrWsFedProvider {
    /**
     * URL of the endpoint used by active clients when authenticating with federated domains set up for single sign-on in Azure Active Directory (Azure AD). Corresponds to the ActiveLogOnUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet.
     */
    activeSignInUri?: string | undefined;
    /**
     * Determines whether Azure AD accepts the MFA performed by the federated IdP when a federated user accesses an application that is governed by a conditional access policy that requires MFA. The possible values are: acceptIfMfaDoneByFederatedIdp, enforceMfaByFederatedIdp, rejectMfaByFederatedIdp, unknownFutureValue. For more information, see federatedIdpMfaBehavior values.
     */
    federatedIdpMfaBehavior?: FederatedIdpMfaBehavior | undefined;
    /**
     * If true, when SAML authentication requests are sent to the federated SAML IdP, Azure AD will sign those requests using the OrgID signing key. If false (default), the SAML authentication requests sent to the federated IdP are not signed.
     */
    isSignedAuthenticationRequestRequired?: boolean | undefined;
    /**
     * Fallback token signing certificate that is used to sign tokens when the primary signing certificate expires. Formatted as Base64 encoded strings of the public portion of the federated IdP's token signing certificate. Needs to be compatible with the X509Certificate2 class. Much like the signingCertificate, the nextSigningCertificate property is used if a rollover is required outside of the auto-rollover update, a new federation service is being set up, or if the new token signing certificate is not present in the federation properties after the federation service certificate has been updated.
     */
    nextSigningCertificate?: string | undefined;
    /**
     * Sets the preferred behavior for the sign-in prompt. The possible values are: translateToFreshPasswordAuthentication, nativeSupport, disabled, unknownFutureValue.
     */
    promptLoginBehavior?: PromptLoginBehavior | undefined;
    /**
     * Provides status and timestamp of the last update of the signing certificate.
     */
    signingCertificateUpdateStatus?: SigningCertificateUpdateStatus | undefined;
    /**
     * URI that clients are redirected to when they sign out of Azure AD services. Corresponds to the LogOffUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet.
     */
    signOutUri?: string | undefined;
}
