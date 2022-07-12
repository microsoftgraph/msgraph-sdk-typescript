import {IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SocialIdentityProvider extends IdentityProviderBase implements Parsable {
    /** The client identifier for the application obtained when registering the application with the identity provider. Required. */
    private _clientId?: string | undefined;
    /** The client secret for the application that is obtained when the application is registered with the identity provider. This is write-only. A read operation returns ****. Required. */
    private _clientSecret?: string | undefined;
    /** For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required. */
    private _identityProviderType?: string | undefined;
    /**
     * Gets the clientId property value. The client identifier for the application obtained when registering the application with the identity provider. Required.
     * @returns a string
     */
    public get clientId() {
        return this._clientId;
    };
    /**
     * Sets the clientId property value. The client identifier for the application obtained when registering the application with the identity provider. Required.
     * @param value Value to set for the clientId property.
     */
    public set clientId(value: string | undefined) {
        this._clientId = value;
    };
    /**
     * Gets the clientSecret property value. The client secret for the application that is obtained when the application is registered with the identity provider. This is write-only. A read operation returns ****. Required.
     * @returns a string
     */
    public get clientSecret() {
        return this._clientSecret;
    };
    /**
     * Sets the clientSecret property value. The client secret for the application that is obtained when the application is registered with the identity provider. This is write-only. A read operation returns ****. Required.
     * @param value Value to set for the clientSecret property.
     */
    public set clientSecret(value: string | undefined) {
        this._clientSecret = value;
    };
    /**
     * Instantiates a new SocialIdentityProvider and sets the default values.
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
            "clientId": n => { this.clientId = n.getStringValue(); },
            "clientSecret": n => { this.clientSecret = n.getStringValue(); },
            "identityProviderType": n => { this.identityProviderType = n.getStringValue(); },
        };
    };
    /**
     * Gets the identityProviderType property value. For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required.
     * @returns a string
     */
    public get identityProviderType() {
        return this._identityProviderType;
    };
    /**
     * Sets the identityProviderType property value. For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required.
     * @param value Value to set for the identityProviderType property.
     */
    public set identityProviderType(value: string | undefined) {
        this._identityProviderType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("clientId", this.clientId);
        writer.writeStringValue("clientSecret", this.clientSecret);
        writer.writeStringValue("identityProviderType", this.identityProviderType);
    };
}
