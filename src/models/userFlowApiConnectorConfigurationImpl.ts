import {createIdentityApiConnectorFromDiscriminatorValue} from './createIdentityApiConnectorFromDiscriminatorValue';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityApiConnectorImpl} from './index';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowApiConnectorConfigurationImpl implements AdditionalDataHolder, Parsable, UserFlowApiConnectorConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The postAttributeCollection property */
    public postAttributeCollection?: IdentityApiConnector | undefined;
    /** The postFederationSignup property */
    public postFederationSignup?: IdentityApiConnector | undefined;
    /**
     * Instantiates a new userFlowApiConnectorConfiguration and sets the default values.
     * @param userFlowApiConnectorConfigurationParameterValue 
     */
    public constructor(userFlowApiConnectorConfigurationParameterValue?: UserFlowApiConnectorConfiguration | undefined) {
        this.additionalData = userFlowApiConnectorConfigurationParameterValue?.additionalData ? userFlowApiConnectorConfigurationParameterValue?.additionalData! : {}
        this.postAttributeCollection = userFlowApiConnectorConfigurationParameterValue?.postAttributeCollection ;
        this.postFederationSignup = userFlowApiConnectorConfigurationParameterValue?.postFederationSignup ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.postAttributeCollection){
        writer.writeObjectValue<IdentityApiConnectorImpl>("postAttributeCollection", new IdentityApiConnectorImpl(this.postAttributeCollection));
        }
        if(this.postFederationSignup){
        writer.writeObjectValue<IdentityApiConnectorImpl>("postFederationSignup", new IdentityApiConnectorImpl(this.postFederationSignup));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
