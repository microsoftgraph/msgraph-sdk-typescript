import {SelfServiceSignUpAuthenticationFlowConfiguration} from './selfServiceSignUpAuthenticationFlowConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SelfServiceSignUpAuthenticationFlowConfigurationImpl implements AdditionalDataHolder, Parsable, SelfServiceSignUpAuthenticationFlowConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether self-service sign-up flow is enabled or disabled. The default value is false. This property is not a key. Required. */
    public isEnabled?: boolean | undefined;
    /**
     * Instantiates a new selfServiceSignUpAuthenticationFlowConfiguration and sets the default values.
     * @param selfServiceSignUpAuthenticationFlowConfigurationParameterValue 
     */
    public constructor(selfServiceSignUpAuthenticationFlowConfigurationParameterValue?: SelfServiceSignUpAuthenticationFlowConfiguration | undefined) {
        this.additionalData = selfServiceSignUpAuthenticationFlowConfigurationParameterValue?.additionalData ? selfServiceSignUpAuthenticationFlowConfigurationParameterValue?.additionalData! : {}
        this.isEnabled = selfServiceSignUpAuthenticationFlowConfigurationParameterValue?.isEnabled ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
