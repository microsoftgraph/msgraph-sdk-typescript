import {CalculatedColumn} from './calculatedColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalculatedColumnImpl implements AdditionalDataHolder, CalculatedColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** For dateTime output types, the format of the value. Must be one of dateOnly or dateTime. */
    public format?: string | undefined;
    /** The formula used to compute the value for this column. */
    public formula?: string | undefined;
    /** The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text. */
    public outputType?: string | undefined;
    /**
     * Instantiates a new calculatedColumn and sets the default values.
     * @param calculatedColumnParameterValue 
     */
    public constructor(calculatedColumnParameterValue?: CalculatedColumn | undefined) {
        this.additionalData = calculatedColumnParameterValue?.additionalData ? calculatedColumnParameterValue?.additionalData! : {}
        this.format = calculatedColumnParameterValue?.format ;
        this.formula = calculatedColumnParameterValue?.formula ;
        this.outputType = calculatedColumnParameterValue?.outputType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "format": n => { this.format = n.getStringValue(); },
            "formula": n => { this.formula = n.getStringValue(); },
            "outputType": n => { this.outputType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.format){
        writer.writeStringValue("format", this.format);
        }
        if(this.formula){
        writer.writeStringValue("formula", this.formula);
        }
        if(this.outputType){
        writer.writeStringValue("outputType", this.outputType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
