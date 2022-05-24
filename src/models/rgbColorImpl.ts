import {RgbColor} from './rgbColor';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Color in RGB. */
export class RgbColorImpl implements AdditionalDataHolder, Parsable, RgbColor {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Blue value */
    public b?: number | undefined;
    /** Green value */
    public g?: number | undefined;
    /** Red value */
    public r?: number | undefined;
    /**
     * Instantiates a new rgbColor and sets the default values.
     * @param rgbColorParameterValue 
     */
    public constructor(rgbColorParameterValue?: RgbColor | undefined) {
        this.additionalData = rgbColorParameterValue?.additionalData ? rgbColorParameterValue?.additionalData! : {}
        this.b = rgbColorParameterValue?.b ;
        this.g = rgbColorParameterValue?.g ;
        this.r = rgbColorParameterValue?.r ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "b": n => { this.b = n.getNumberValue(); },
            "g": n => { this.g = n.getNumberValue(); },
            "r": n => { this.r = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.b){
        writer.writeNumberValue("b", this.b);
        }
        if(this.g){
        writer.writeNumberValue("g", this.g);
        }
        if(this.r){
        writer.writeNumberValue("r", this.r);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
