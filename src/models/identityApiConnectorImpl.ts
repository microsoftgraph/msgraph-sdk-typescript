import {ApiAuthenticationConfigurationBase} from './apiAuthenticationConfigurationBase';
import {createApiAuthenticationConfigurationBaseFromDiscriminatorValue} from './createApiAuthenticationConfigurationBaseFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {ApiAuthenticationConfigurationBaseImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityApiConnectorImpl extends EntityImpl implements IdentityApiConnector {
    /** The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported. */
    private _authenticationConfiguration?: ApiAuthenticationConfigurationBase | undefined;
    /** The name of the API connector. */
    private _displayName?: string | undefined;
    /** The URL of the API endpoint to call. */
    private _targetUrl?: string | undefined;
    /**
     * Gets the authenticationConfiguration property value. The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
     * @returns a ApiAuthenticationConfigurationBaseInterface
     */
    public get authenticationConfiguration() {
        return this._authenticationConfiguration;
    };
    /**
     * Sets the authenticationConfiguration property value. The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported.
     * @param value Value to set for the authenticationConfiguration property.
     */
    public set authenticationConfiguration(value: ApiAuthenticationConfigurationBase | undefined) {
        if(value) {
            this._authenticationConfiguration = value instanceof ApiAuthenticationConfigurationBaseImpl? value as ApiAuthenticationConfigurationBaseImpl: new ApiAuthenticationConfigurationBaseImpl(value);
        }
    };
    /**
     * Instantiates a new identityApiConnector and sets the default values.
     * @param identityApiConnectorParameterValue 
     */
    public constructor(identityApiConnectorParameterValue?: IdentityApiConnector | undefined) {
        super(identityApiConnectorParameterValue);
        this._authenticationConfiguration = identityApiConnectorParameterValue?.authenticationConfiguration;
        this._displayName = identityApiConnectorParameterValue?.displayName;
        this._targetUrl = identityApiConnectorParameterValue?.targetUrl;
    };
    /**
     * Gets the displayName property value. The name of the API connector.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the API connector.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationConfiguration": n => { this.authenticationConfiguration = n.getObjectValue<ApiAuthenticationConfigurationBaseImpl>(createApiAuthenticationConfigurationBaseFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "targetUrl": n => { this.targetUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.authenticationConfiguration){
            writer.writeObjectValue<ApiAuthenticationConfigurationBaseImpl>("authenticationConfiguration", (this.authenticationConfiguration instanceof ApiAuthenticationConfigurationBaseImpl? this.authenticationConfiguration as ApiAuthenticationConfigurationBaseImpl: new ApiAuthenticationConfigurationBaseImpl(this.authenticationConfiguration)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.targetUrl){
            writer.writeStringValue("targetUrl", this.targetUrl);
        }
    };
    /**
     * Gets the targetUrl property value. The URL of the API endpoint to call.
     * @returns a string
     */
    public get targetUrl() {
        return this._targetUrl;
    };
    /**
     * Sets the targetUrl property value. The URL of the API endpoint to call.
     * @param value Value to set for the targetUrl property.
     */
    public set targetUrl(value: string | undefined) {
        if(value) {
            this._targetUrl = value;
        }
    };
}
