import {AlertTrigger} from './alertTrigger';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertTriggerImpl implements AdditionalDataHolder, AlertTrigger, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Name of the property serving as a detection trigger. */
    name?: string | undefined;
    /** Type of the property in the key:value pair for interpretation. For example, String, Boolean etc. */
    type?: string | undefined;
    /** Value of the property serving as a detection trigger. */
    value?: string | undefined;
    /**
     * Instantiates a new alertTrigger and sets the default values.
     * @param alertTriggerParameterValue 
     */
    public constructor(alertTriggerParameterValue?: AlertTrigger | undefined) {
        this.additionalData = {};
        this.additionalData = alertTriggerParameterValue?.additionalData ? {} : alertTriggerParameterValue?.additionalData!
        this.name = alertTriggerParameterValue?.name ;
        this.type = alertTriggerParameterValue?.type ;
        this.value = alertTriggerParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.type){
        if(this.type)
        writer.writeStringValue("type", this.type);
        }
        if(this.value){
        if(this.value)
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
