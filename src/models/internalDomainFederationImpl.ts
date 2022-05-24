import {createSigningCertificateUpdateStatusFromDiscriminatorValue} from './createSigningCertificateUpdateStatusFromDiscriminatorValue';
import {FederatedIdpMfaBehavior} from './federatedIdpMfaBehavior';
import {SamlOrWsFedProviderImpl, SigningCertificateUpdateStatusImpl} from './index';
import {InternalDomainFederation} from './internalDomainFederation';
import {PromptLoginBehavior} from './promptLoginBehavior';
import {SigningCertificateUpdateStatus} from './signingCertificateUpdateStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class InternalDomainFederationImpl extends SamlOrWsFedProviderImpl implements InternalDomainFederation, Parsable {
    /** URL of the endpoint used by active clients when authenticating with federated domains set up for single sign-on in Azure Active Directory (Azure AD). Corresponds to the ActiveLogOnUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet. */
    public activeSignInUri?: string | undefined;
    /** Determines whether Azure AD accepts the MFA performed by the federated IdP when a federated user accesses an application that is governed by a conditional access policy that requires MFA. The possible values are: acceptIfMfaDoneByFederatedIdp, enforceMfaByFederatedIdp, rejectMfaByFederatedIdp, unknownFutureValue. For more information, see federatedIdpMfaBehavior values. */
    public federatedIdpMfaBehavior?: FederatedIdpMfaBehavior | undefined;
    /** If true, when SAML authentication requests are sent to the federated SAML IdP, Azure AD will sign those requests using the OrgID signing key. If false (default), the SAML authentication requests sent to the federated IdP are not signed. */
    public isSignedAuthenticationRequestRequired?: boolean | undefined;
    /** Fallback token signing certificate that is used to sign tokens when the primary signing certificate expires. Formatted as Base64 encoded strings of the public portion of the federated IdP's token signing certificate. Needs to be compatible with the X509Certificate2 class. Much like the signingCertificate, the nextSigningCertificate property is used if a rollover is required outside of the auto-rollover update, a new federation service is being set up, or if the new token signing certificate is not present in the federation properties after the federation service certificate has been updated. */
    public nextSigningCertificate?: string | undefined;
    /** Sets the preferred behavior for the sign-in prompt. The possible values are: translateToFreshPasswordAuthentication, nativeSupport, disabled, unknownFutureValue. */
    public promptLoginBehavior?: PromptLoginBehavior | undefined;
    /** Provides status and timestamp of the last update of the signing certificate. */
    public signingCertificateUpdateStatus?: SigningCertificateUpdateStatus | undefined;
    /** URI that clients are redirected to when they sign out of Azure AD services. Corresponds to the LogOffUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet. */
    public signOutUri?: string | undefined;
    /**
     * Instantiates a new internalDomainFederation and sets the default values.
     * @param internalDomainFederationParameterValue 
     */
    public constructor(internalDomainFederationParameterValue?: InternalDomainFederation | undefined) {
        super();
        this.activeSignInUri = internalDomainFederationParameterValue?.activeSignInUri ;
        this.federatedIdpMfaBehavior = internalDomainFederationParameterValue?.federatedIdpMfaBehavior ;
        this.isSignedAuthenticationRequestRequired = internalDomainFederationParameterValue?.isSignedAuthenticationRequestRequired ;
        this.nextSigningCertificate = internalDomainFederationParameterValue?.nextSigningCertificate ;
        this.promptLoginBehavior = internalDomainFederationParameterValue?.promptLoginBehavior ;
        this.signingCertificateUpdateStatus = internalDomainFederationParameterValue?.signingCertificateUpdateStatus ;
        this.signOutUri = internalDomainFederationParameterValue?.signOutUri ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeSignInUri": n => { this.activeSignInUri = n.getStringValue(); },
            "federatedIdpMfaBehavior": n => { this.federatedIdpMfaBehavior = n.getEnumValue<FederatedIdpMfaBehavior>(FederatedIdpMfaBehavior); },
            "isSignedAuthenticationRequestRequired": n => { this.isSignedAuthenticationRequestRequired = n.getBooleanValue(); },
            "nextSigningCertificate": n => { this.nextSigningCertificate = n.getStringValue(); },
            "promptLoginBehavior": n => { this.promptLoginBehavior = n.getEnumValue<PromptLoginBehavior>(PromptLoginBehavior); },
            "signingCertificateUpdateStatus": n => { this.signingCertificateUpdateStatus = n.getObjectValue<SigningCertificateUpdateStatusImpl>(createSigningCertificateUpdateStatusFromDiscriminatorValue); },
            "signOutUri": n => { this.signOutUri = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activeSignInUri){
        writer.writeStringValue("activeSignInUri", this.activeSignInUri);
        }
        if(this.federatedIdpMfaBehavior){
        writer.writeEnumValue<FederatedIdpMfaBehavior>("federatedIdpMfaBehavior", this.federatedIdpMfaBehavior);
        }
        if(this.isSignedAuthenticationRequestRequired){
        writer.writeBooleanValue("isSignedAuthenticationRequestRequired", this.isSignedAuthenticationRequestRequired);
        }
        if(this.nextSigningCertificate){
        writer.writeStringValue("nextSigningCertificate", this.nextSigningCertificate);
        }
        if(this.promptLoginBehavior){
        writer.writeEnumValue<PromptLoginBehavior>("promptLoginBehavior", this.promptLoginBehavior);
        }
        if(this.signingCertificateUpdateStatus){
        writer.writeObjectValue<SigningCertificateUpdateStatusImpl>("signingCertificateUpdateStatus", new SigningCertificateUpdateStatusImpl(this.signingCertificateUpdateStatus));
        }
        if(this.signOutUri){
        writer.writeStringValue("signOutUri", this.signOutUri);
        }
    };
}
