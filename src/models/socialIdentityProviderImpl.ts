import {IdentityProviderBaseImpl} from './index';
import {SocialIdentityProvider} from './socialIdentityProvider';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SocialIdentityProviderImpl extends IdentityProviderBaseImpl implements SocialIdentityProvider {
    /** The client identifier for the application obtained when registering the application with the identity provider. Required. */
    public clientId?: string | undefined;
    /** The client secret for the application that is obtained when the application is registered with the identity provider. This is write-only. A read operation returns ****. Required. */
    public clientSecret?: string | undefined;
    /** For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required. */
    public identityProviderType?: string | undefined;
    /**
     * Instantiates a new SocialIdentityProvider and sets the default values.
     * @param socialIdentityProviderParameterValue 
     */
    public constructor(socialIdentityProviderParameterValue?: SocialIdentityProvider | undefined) {
        super(socialIdentityProviderParameterValue);
        this.clientId = socialIdentityProviderParameterValue?.clientId;
        this.clientSecret = socialIdentityProviderParameterValue?.clientSecret;
        this.identityProviderType = socialIdentityProviderParameterValue?.identityProviderType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientId": n => { this.clientId = n.getStringValue(); },
            "clientSecret": n => { this.clientSecret = n.getStringValue(); },
            "identityProviderType": n => { this.identityProviderType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.clientId){
            writer.writeStringValue("clientId", this.clientId);
        }
        if(this.clientSecret){
            writer.writeStringValue("clientSecret", this.clientSecret);
        }
        if(this.identityProviderType){
            writer.writeStringValue("identityProviderType", this.identityProviderType);
        }
    };
}
