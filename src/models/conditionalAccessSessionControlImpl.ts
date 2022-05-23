import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessSessionControlImpl implements AdditionalDataHolder, ConditionalAccessSessionControl, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether the session control is enabled. */
    public isEnabled?: boolean | undefined;
    /**
     * Instantiates a new conditionalAccessSessionControl and sets the default values.
     * @param conditionalAccessSessionControlParameterValue 
     */
    public constructor(conditionalAccessSessionControlParameterValue?: ConditionalAccessSessionControl | undefined) {
        this.additionalData = conditionalAccessSessionControlParameterValue?.additionalData ? conditionalAccessSessionControlParameterValue?.additionalData! : {}
        this.isEnabled = conditionalAccessSessionControlParameterValue?.isEnabled ;
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
