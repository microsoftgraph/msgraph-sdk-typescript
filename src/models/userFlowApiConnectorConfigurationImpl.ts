import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityApiConnectorImpl} from './index';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowApiConnectorConfigurationImpl implements UserFlowApiConnectorConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The postAttributeCollection property */
    private _postAttributeCollection?: IdentityApiConnector | undefined;
    /** The postFederationSignup property */
    private _postFederationSignup?: IdentityApiConnector | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new userFlowApiConnectorConfiguration and sets the default values.
     * @param userFlowApiConnectorConfigurationParameterValue 
     */
    public constructor(userFlowApiConnectorConfigurationParameterValue?: UserFlowApiConnectorConfiguration | undefined) {
        this._additionalData = userFlowApiConnectorConfigurationParameterValue?.additionalData ? userFlowApiConnectorConfigurationParameterValue?.additionalData! : {};
        this._postAttributeCollection = userFlowApiConnectorConfigurationParameterValue?.postAttributeCollection;
        this._postFederationSignup = userFlowApiConnectorConfigurationParameterValue?.postFederationSignup;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "postAttributeCollection": n => { this.postAttributeCollection = n.getObjectValue<IdentityApiConnectorImpl>(createIdentityApiConnectorFromDiscriminatorValue); },
            "postFederationSignup": n => { this.postFederationSignup = n.getObjectValue<IdentityApiConnectorImpl>(createIdentityApiConnectorFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the postAttributeCollection property value. The postAttributeCollection property
     * @returns a IdentityApiConnectorInterface
     */
    public get postAttributeCollection() {
        return this._postAttributeCollection;
    };
    /**
     * Sets the postAttributeCollection property value. The postAttributeCollection property
     * @param value Value to set for the postAttributeCollection property.
     */
    public set postAttributeCollection(value: IdentityApiConnector | undefined) {
        if(value) {
            this._postAttributeCollection = value instanceof IdentityApiConnectorImpl? value : new IdentityApiConnectorImpl(value);
        }
    };
    /**
     * Gets the postFederationSignup property value. The postFederationSignup property
     * @returns a IdentityApiConnectorInterface
     */
    public get postFederationSignup() {
        return this._postFederationSignup;
    };
    /**
     * Sets the postFederationSignup property value. The postFederationSignup property
     * @param value Value to set for the postFederationSignup property.
     */
    public set postFederationSignup(value: IdentityApiConnector | undefined) {
        if(value) {
            this._postFederationSignup = value instanceof IdentityApiConnectorImpl? value : new IdentityApiConnectorImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.postAttributeCollection){
            writer.writeObjectValue<IdentityApiConnectorImpl>("postAttributeCollection", (!this.postAttributeCollection || this.postAttributeCollection instanceof IdentityApiConnectorImpl? this.postAttributeCollection : new IdentityApiConnectorImpl(this.postAttributeCollection)));
        }
        if(this.postFederationSignup){
            writer.writeObjectValue<IdentityApiConnectorImpl>("postFederationSignup", (!this.postFederationSignup || this.postFederationSignup instanceof IdentityApiConnectorImpl? this.postFederationSignup : new IdentityApiConnectorImpl(this.postFederationSignup)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
