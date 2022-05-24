import {ConditionalAccessGrantControls} from './conditionalAccessGrantControls';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessGrantControlsImpl implements AdditionalDataHolder, ConditionalAccessGrantControls, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice, domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue. */
    public builtInControls?: string[] | undefined;
    /** List of custom controls IDs required by the policy. To learn more about custom control, see Custom controls (preview). */
    public customAuthenticationFactors?: string[] | undefined;
    /** Defines the relationship of the grant controls. Possible values: AND, OR. */
    public operator?: string | undefined;
    /** List of terms of use IDs required by the policy. */
    public termsOfUse?: string[] | undefined;
    /**
     * Instantiates a new conditionalAccessGrantControls and sets the default values.
     * @param conditionalAccessGrantControlsParameterValue 
     */
    public constructor(conditionalAccessGrantControlsParameterValue?: ConditionalAccessGrantControls | undefined) {
        this.additionalData = conditionalAccessGrantControlsParameterValue?.additionalData ? conditionalAccessGrantControlsParameterValue?.additionalData! : {}
        this.builtInControls = conditionalAccessGrantControlsParameterValue?.builtInControls ;
        this.customAuthenticationFactors = conditionalAccessGrantControlsParameterValue?.customAuthenticationFactors ;
        this.operator = conditionalAccessGrantControlsParameterValue?.operator ;
        this.termsOfUse = conditionalAccessGrantControlsParameterValue?.termsOfUse ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "builtInControls": n => { this.builtInControls = n.getCollectionOfPrimitiveValues<string>(); },
            "customAuthenticationFactors": n => { this.customAuthenticationFactors = n.getCollectionOfPrimitiveValues<string>(); },
            "operator": n => { this.operator = n.getStringValue(); },
            "termsOfUse": n => { this.termsOfUse = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.builtInControls){
        writer.writeCollectionOfPrimitiveValues<string>("builtInControls", this.builtInControls);
        }
        if(this.customAuthenticationFactors){
        writer.writeCollectionOfPrimitiveValues<string>("customAuthenticationFactors", this.customAuthenticationFactors);
        }
        if(this.operator){
        writer.writeStringValue("operator", this.operator);
        }
        if(this.termsOfUse){
        writer.writeCollectionOfPrimitiveValues<string>("termsOfUse", this.termsOfUse);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
