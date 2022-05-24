import {IdentityProvider} from './identityProvider';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityProviderImpl extends EntityImpl implements IdentityProvider, Parsable {
    /** The client ID for the application obtained when registering the application with the identity provider. This is a required field.  Required. Not nullable. */
    public clientId?: string | undefined;
    /** The client secret for the application obtained when registering the application with the identity provider. This is write-only. A read operation will return ****. This is a required field. Required. Not nullable. */
    public clientSecret?: string | undefined;
    /** The display name of the identity provider. Not nullable. */
    public name?: string | undefined;
    /** The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo,QQ, WeChat, OpenIDConnect. Not nullable. */
    public type?: string | undefined;
    /**
     * Instantiates a new identityProvider and sets the default values.
     * @param identityProviderParameterValue 
     */
    public constructor(identityProviderParameterValue?: IdentityProvider | undefined) {
        super();
        this.clientId = identityProviderParameterValue?.clientId ;
        this.clientSecret = identityProviderParameterValue?.clientSecret ;
        this.name = identityProviderParameterValue?.name ;
        this.type = identityProviderParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientId": n => { this.clientId = n.getStringValue(); },
            "clientSecret": n => { this.clientSecret = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
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
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
    };
}
