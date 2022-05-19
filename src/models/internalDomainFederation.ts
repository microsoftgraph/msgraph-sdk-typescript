import {createSigningCertificateUpdateStatusFromDiscriminatorValue} from './createSigningCertificateUpdateStatusFromDiscriminatorValue';
import {FederatedIdpMfaBehavior} from './federatedIdpMfaBehavior';
import {SamlOrWsFedProvider, SigningCertificateUpdateStatus} from './index';
import {PromptLoginBehavior} from './promptLoginBehavior';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class InternalDomainFederation extends SamlOrWsFedProvider implements Parsable {
    /** URL of the endpoint used by active clients when authenticating with federated domains set up for single sign-on in Azure Active Directory (Azure AD). Corresponds to the ActiveLogOnUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet. */
    private _activeSignInUri?: string | undefined;
    /** Determines whether Azure AD accepts the MFA performed by the federated IdP when a federated user accesses an application that is governed by a conditional access policy that requires MFA. The possible values are: acceptIfMfaDoneByFederatedIdp, enforceMfaByFederatedIdp, rejectMfaByFederatedIdp, unknownFutureValue. For more information, see federatedIdpMfaBehavior values. */
    private _federatedIdpMfaBehavior?: FederatedIdpMfaBehavior | undefined;
    /** If true, when SAML authentication requests are sent to the federated SAML IdP, Azure AD will sign those requests using the OrgID signing key. If false (default), the SAML authentication requests sent to the federated IdP are not signed. */
    private _isSignedAuthenticationRequestRequired?: boolean | undefined;
    /** Fallback token signing certificate that is used to sign tokens when the primary signing certificate expires. Formatted as Base64 encoded strings of the public portion of the federated IdP's token signing certificate. Needs to be compatible with the X509Certificate2 class. Much like the signingCertificate, the nextSigningCertificate property is used if a rollover is required outside of the auto-rollover update, a new federation service is being set up, or if the new token signing certificate is not present in the federation properties after the federation service certificate has been updated. */
    private _nextSigningCertificate?: string | undefined;
    /** Sets the preferred behavior for the sign-in prompt. The possible values are: translateToFreshPasswordAuthentication, nativeSupport, disabled, unknownFutureValue. */
    private _promptLoginBehavior?: PromptLoginBehavior | undefined;
    /** Provides status and timestamp of the last update of the signing certificate. */
    private _signingCertificateUpdateStatus?: SigningCertificateUpdateStatus | undefined;
    /** URI that clients are redirected to when they sign out of Azure AD services. Corresponds to the LogOffUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet. */
    private _signOutUri?: string | undefined;
    /**
     * Gets the activeSignInUri property value. URL of the endpoint used by active clients when authenticating with federated domains set up for single sign-on in Azure Active Directory (Azure AD). Corresponds to the ActiveLogOnUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet.
     * @returns a string
     */
    public get activeSignInUri() {
        return this._activeSignInUri;
    };
    /**
     * Sets the activeSignInUri property value. URL of the endpoint used by active clients when authenticating with federated domains set up for single sign-on in Azure Active Directory (Azure AD). Corresponds to the ActiveLogOnUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet.
     * @param value Value to set for the activeSignInUri property.
     */
    public set activeSignInUri(value: string | undefined) {
        this._activeSignInUri = value;
    };
    /**
     * Instantiates a new internalDomainFederation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the federatedIdpMfaBehavior property value. Determines whether Azure AD accepts the MFA performed by the federated IdP when a federated user accesses an application that is governed by a conditional access policy that requires MFA. The possible values are: acceptIfMfaDoneByFederatedIdp, enforceMfaByFederatedIdp, rejectMfaByFederatedIdp, unknownFutureValue. For more information, see federatedIdpMfaBehavior values.
     * @returns a federatedIdpMfaBehavior
     */
    public get federatedIdpMfaBehavior() {
        return this._federatedIdpMfaBehavior;
    };
    /**
     * Sets the federatedIdpMfaBehavior property value. Determines whether Azure AD accepts the MFA performed by the federated IdP when a federated user accesses an application that is governed by a conditional access policy that requires MFA. The possible values are: acceptIfMfaDoneByFederatedIdp, enforceMfaByFederatedIdp, rejectMfaByFederatedIdp, unknownFutureValue. For more information, see federatedIdpMfaBehavior values.
     * @param value Value to set for the federatedIdpMfaBehavior property.
     */
    public set federatedIdpMfaBehavior(value: FederatedIdpMfaBehavior | undefined) {
        this._federatedIdpMfaBehavior = value;
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
            "signingCertificateUpdateStatus": n => { this.signingCertificateUpdateStatus = n.getObjectValue<SigningCertificateUpdateStatus>(createSigningCertificateUpdateStatusFromDiscriminatorValue); },
            "signOutUri": n => { this.signOutUri = n.getStringValue(); },
        };
    };
    /**
     * Gets the isSignedAuthenticationRequestRequired property value. If true, when SAML authentication requests are sent to the federated SAML IdP, Azure AD will sign those requests using the OrgID signing key. If false (default), the SAML authentication requests sent to the federated IdP are not signed.
     * @returns a boolean
     */
    public get isSignedAuthenticationRequestRequired() {
        return this._isSignedAuthenticationRequestRequired;
    };
    /**
     * Sets the isSignedAuthenticationRequestRequired property value. If true, when SAML authentication requests are sent to the federated SAML IdP, Azure AD will sign those requests using the OrgID signing key. If false (default), the SAML authentication requests sent to the federated IdP are not signed.
     * @param value Value to set for the isSignedAuthenticationRequestRequired property.
     */
    public set isSignedAuthenticationRequestRequired(value: boolean | undefined) {
        this._isSignedAuthenticationRequestRequired = value;
    };
    /**
     * Gets the nextSigningCertificate property value. Fallback token signing certificate that is used to sign tokens when the primary signing certificate expires. Formatted as Base64 encoded strings of the public portion of the federated IdP's token signing certificate. Needs to be compatible with the X509Certificate2 class. Much like the signingCertificate, the nextSigningCertificate property is used if a rollover is required outside of the auto-rollover update, a new federation service is being set up, or if the new token signing certificate is not present in the federation properties after the federation service certificate has been updated.
     * @returns a string
     */
    public get nextSigningCertificate() {
        return this._nextSigningCertificate;
    };
    /**
     * Sets the nextSigningCertificate property value. Fallback token signing certificate that is used to sign tokens when the primary signing certificate expires. Formatted as Base64 encoded strings of the public portion of the federated IdP's token signing certificate. Needs to be compatible with the X509Certificate2 class. Much like the signingCertificate, the nextSigningCertificate property is used if a rollover is required outside of the auto-rollover update, a new federation service is being set up, or if the new token signing certificate is not present in the federation properties after the federation service certificate has been updated.
     * @param value Value to set for the nextSigningCertificate property.
     */
    public set nextSigningCertificate(value: string | undefined) {
        this._nextSigningCertificate = value;
    };
    /**
     * Gets the promptLoginBehavior property value. Sets the preferred behavior for the sign-in prompt. The possible values are: translateToFreshPasswordAuthentication, nativeSupport, disabled, unknownFutureValue.
     * @returns a promptLoginBehavior
     */
    public get promptLoginBehavior() {
        return this._promptLoginBehavior;
    };
    /**
     * Sets the promptLoginBehavior property value. Sets the preferred behavior for the sign-in prompt. The possible values are: translateToFreshPasswordAuthentication, nativeSupport, disabled, unknownFutureValue.
     * @param value Value to set for the promptLoginBehavior property.
     */
    public set promptLoginBehavior(value: PromptLoginBehavior | undefined) {
        this._promptLoginBehavior = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("activeSignInUri", this.activeSignInUri);
        writer.writeEnumValue<FederatedIdpMfaBehavior>("federatedIdpMfaBehavior", this.federatedIdpMfaBehavior);
        writer.writeBooleanValue("isSignedAuthenticationRequestRequired", this.isSignedAuthenticationRequestRequired);
        writer.writeStringValue("nextSigningCertificate", this.nextSigningCertificate);
        writer.writeEnumValue<PromptLoginBehavior>("promptLoginBehavior", this.promptLoginBehavior);
        writer.writeObjectValue<SigningCertificateUpdateStatus>("signingCertificateUpdateStatus", this.signingCertificateUpdateStatus);
        writer.writeStringValue("signOutUri", this.signOutUri);
    };
    /**
     * Gets the signingCertificateUpdateStatus property value. Provides status and timestamp of the last update of the signing certificate.
     * @returns a signingCertificateUpdateStatus
     */
    public get signingCertificateUpdateStatus() {
        return this._signingCertificateUpdateStatus;
    };
    /**
     * Sets the signingCertificateUpdateStatus property value. Provides status and timestamp of the last update of the signing certificate.
     * @param value Value to set for the signingCertificateUpdateStatus property.
     */
    public set signingCertificateUpdateStatus(value: SigningCertificateUpdateStatus | undefined) {
        this._signingCertificateUpdateStatus = value;
    };
    /**
     * Gets the signOutUri property value. URI that clients are redirected to when they sign out of Azure AD services. Corresponds to the LogOffUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet.
     * @returns a string
     */
    public get signOutUri() {
        return this._signOutUri;
    };
    /**
     * Sets the signOutUri property value. URI that clients are redirected to when they sign out of Azure AD services. Corresponds to the LogOffUri property of the Set-MsolDomainFederationSettings MSOnline v1 PowerShell cmdlet.
     * @param value Value to set for the signOutUri property.
     */
    public set signOutUri(value: string | undefined) {
        this._signOutUri = value;
    };
}
