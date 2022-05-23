import {AuthenticationProtocol} from './authenticationProtocol';
import {IdentityProviderBaseImpl} from './index';
import {SamlOrWsFedProvider} from './samlOrWsFedProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class SamlOrWsFedProviderImpl extends IdentityProviderBaseImpl implements Parsable, SamlOrWsFedProvider {
    /** Issuer URI of the federation server. */
    public issuerUri?: string | undefined;
    /** URI of the metadata exchange endpoint used for authentication from rich client applications. */
    public metadataExchangeUri?: string | undefined;
    /** URI that web-based clients are directed to when signing in to Azure Active Directory (Azure AD) services. */
    public passiveSignInUri?: string | undefined;
    /** Preferred authentication protocol. Supported values include saml or wsfed. */
    public preferredAuthenticationProtocol?: AuthenticationProtocol | undefined;
    /** Current certificate used to sign tokens passed to the Microsoft identity platform. The certificate is formatted as a Base64 encoded string of the public portion of the federated IdP's token signing certificate and must be compatible with the X509Certificate2 class.   This property is used in the following scenarios:  if a rollover is required outside of the autorollover update a new federation service is being set up  if the new token signing certificate isn't present in the federation properties after the federation service certificate has been updated.   Azure AD updates certificates via an autorollover process in which it attempts to retrieve a new certificate from the federation service metadata, 30 days before expiry of the current certificate. If a new certificate isn't available, Azure AD monitors the metadata daily and will update the federation settings for the domain when a new certificate is available. */
    public signingCertificate?: string | undefined;
    /**
     * Instantiates a new samlOrWsFedProvider and sets the default values.
     * @param samlOrWsFedProviderParameterValue 
     */
    public constructor(samlOrWsFedProviderParameterValue?: SamlOrWsFedProvider | undefined) {
        super();
        this.issuerUri = samlOrWsFedProviderParameterValue?.issuerUri ;
        this.metadataExchangeUri = samlOrWsFedProviderParameterValue?.metadataExchangeUri ;
        this.passiveSignInUri = samlOrWsFedProviderParameterValue?.passiveSignInUri ;
        this.preferredAuthenticationProtocol = samlOrWsFedProviderParameterValue?.preferredAuthenticationProtocol ;
        this.signingCertificate = samlOrWsFedProviderParameterValue?.signingCertificate ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.issuerUri){
        writer.writeStringValue("issuerUri", this.issuerUri);
        }
        if(this.metadataExchangeUri){
        writer.writeStringValue("metadataExchangeUri", this.metadataExchangeUri);
        }
        if(this.passiveSignInUri){
        writer.writeStringValue("passiveSignInUri", this.passiveSignInUri);
        }
        if(this.preferredAuthenticationProtocol){
        writer.writeEnumValue<AuthenticationProtocol>("preferredAuthenticationProtocol", this.preferredAuthenticationProtocol);
        }
        if(this.signingCertificate){
        writer.writeStringValue("signingCertificate", this.signingCertificate);
        }
    };
}
