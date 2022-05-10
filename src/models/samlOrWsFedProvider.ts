import {AuthenticationProtocol} from './authenticationProtocol';
import {IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SamlOrWsFedProvider extends IdentityProviderBase implements Parsable {
    /** Issuer URI of the federation server. */
    private _issuerUri?: string | undefined;
    /** URI of the metadata exchange endpoint used for authentication from rich client applications. */
    private _metadataExchangeUri?: string | undefined;
    /** URI that web-based clients are directed to when signing in to Azure Active Directory (Azure AD) services. */
    private _passiveSignInUri?: string | undefined;
    /** Preferred authentication protocol. Supported values include saml or wsfed. */
    private _preferredAuthenticationProtocol?: AuthenticationProtocol | undefined;
    /** Current certificate used to sign tokens passed to the Microsoft identity platform. The certificate is formatted as a Base64 encoded string of the public portion of the federated IdP's token signing certificate and must be compatible with the X509Certificate2 class.   This property is used in the following scenarios:  if a rollover is required outside of the autorollover update a new federation service is being set up  if the new token signing certificate isn't present in the federation properties after the federation service certificate has been updated.   Azure AD updates certificates via an autorollover process in which it attempts to retrieve a new certificate from the federation service metadata, 30 days before expiry of the current certificate. If a new certificate isn't available, Azure AD monitors the metadata daily and will update the federation settings for the domain when a new certificate is available. */
    private _signingCertificate?: string | undefined;
    /**
     * Instantiates a new samlOrWsFedProvider and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "issuerUri": n => { this.issuerUri = n.getStringValue(); },
            "metadataExchangeUri": n => { this.metadataExchangeUri = n.getStringValue(); },
            "passiveSignInUri": n => { this.passiveSignInUri = n.getStringValue(); },
            "preferredAuthenticationProtocol": n => { this.preferredAuthenticationProtocol = n.getEnumValue<AuthenticationProtocol>(AuthenticationProtocol); },
            "signingCertificate": n => { this.signingCertificate = n.getStringValue(); },
        };
    };
    /**
     * Gets the issuerUri property value. Issuer URI of the federation server.
     * @returns a string
     */
    public get issuerUri() {
        return this._issuerUri;
    };
    /**
     * Sets the issuerUri property value. Issuer URI of the federation server.
     * @param value Value to set for the issuerUri property.
     */
    public set issuerUri(value: string | undefined) {
        this._issuerUri = value;
    };
    /**
     * Gets the metadataExchangeUri property value. URI of the metadata exchange endpoint used for authentication from rich client applications.
     * @returns a string
     */
    public get metadataExchangeUri() {
        return this._metadataExchangeUri;
    };
    /**
     * Sets the metadataExchangeUri property value. URI of the metadata exchange endpoint used for authentication from rich client applications.
     * @param value Value to set for the metadataExchangeUri property.
     */
    public set metadataExchangeUri(value: string | undefined) {
        this._metadataExchangeUri = value;
    };
    /**
     * Gets the passiveSignInUri property value. URI that web-based clients are directed to when signing in to Azure Active Directory (Azure AD) services.
     * @returns a string
     */
    public get passiveSignInUri() {
        return this._passiveSignInUri;
    };
    /**
     * Sets the passiveSignInUri property value. URI that web-based clients are directed to when signing in to Azure Active Directory (Azure AD) services.
     * @param value Value to set for the passiveSignInUri property.
     */
    public set passiveSignInUri(value: string | undefined) {
        this._passiveSignInUri = value;
    };
    /**
     * Gets the preferredAuthenticationProtocol property value. Preferred authentication protocol. Supported values include saml or wsfed.
     * @returns a authenticationProtocol
     */
    public get preferredAuthenticationProtocol() {
        return this._preferredAuthenticationProtocol;
    };
    /**
     * Sets the preferredAuthenticationProtocol property value. Preferred authentication protocol. Supported values include saml or wsfed.
     * @param value Value to set for the preferredAuthenticationProtocol property.
     */
    public set preferredAuthenticationProtocol(value: AuthenticationProtocol | undefined) {
        this._preferredAuthenticationProtocol = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("issuerUri", this.issuerUri);
        writer.writeStringValue("metadataExchangeUri", this.metadataExchangeUri);
        writer.writeStringValue("passiveSignInUri", this.passiveSignInUri);
        writer.writeEnumValue<AuthenticationProtocol>("preferredAuthenticationProtocol", this.preferredAuthenticationProtocol);
        writer.writeStringValue("signingCertificate", this.signingCertificate);
    };
    /**
     * Gets the signingCertificate property value. Current certificate used to sign tokens passed to the Microsoft identity platform. The certificate is formatted as a Base64 encoded string of the public portion of the federated IdP's token signing certificate and must be compatible with the X509Certificate2 class.   This property is used in the following scenarios:  if a rollover is required outside of the autorollover update a new federation service is being set up  if the new token signing certificate isn't present in the federation properties after the federation service certificate has been updated.   Azure AD updates certificates via an autorollover process in which it attempts to retrieve a new certificate from the federation service metadata, 30 days before expiry of the current certificate. If a new certificate isn't available, Azure AD monitors the metadata daily and will update the federation settings for the domain when a new certificate is available.
     * @returns a string
     */
    public get signingCertificate() {
        return this._signingCertificate;
    };
    /**
     * Sets the signingCertificate property value. Current certificate used to sign tokens passed to the Microsoft identity platform. The certificate is formatted as a Base64 encoded string of the public portion of the federated IdP's token signing certificate and must be compatible with the X509Certificate2 class.   This property is used in the following scenarios:  if a rollover is required outside of the autorollover update a new federation service is being set up  if the new token signing certificate isn't present in the federation properties after the federation service certificate has been updated.   Azure AD updates certificates via an autorollover process in which it attempts to retrieve a new certificate from the federation service metadata, 30 days before expiry of the current certificate. If a new certificate isn't available, Azure AD monitors the metadata daily and will update the federation settings for the domain when a new certificate is available.
     * @param value Value to set for the signingCertificate property.
     */
    public set signingCertificate(value: string | undefined) {
        this._signingCertificate = value;
    };
}
