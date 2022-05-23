import {NumberColumn} from './numberColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NumberColumnImpl implements AdditionalDataHolder, NumberColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** How many decimal places to display. See below for information about the possible values. */
    public decimalPlaces?: string | undefined;
    /** How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number. */
    public displayAs?: string | undefined;
    /** The maximum permitted value. */
    public maximum?: number | undefined;
    /** The minimum permitted value. */
    public minimum?: number | undefined;
    /**
     * Instantiates a new numberColumn and sets the default values.
     * @param numberColumnParameterValue 
     */
    public constructor(numberColumnParameterValue?: NumberColumn | undefined) {
        this.additionalData = numberColumnParameterValue?.additionalData ? numberColumnParameterValue?.additionalData! : {}
        this.decimalPlaces = numberColumnParameterValue?.decimalPlaces ;
        this.displayAs = numberColumnParameterValue?.displayAs ;
        this.maximum = numberColumnParameterValue?.maximum ;
        this.minimum = numberColumnParameterValue?.minimum ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decimalPlaces": n => { this.decimalPlaces = n.getStringValue(); },
            "displayAs": n => { this.displayAs = n.getStringValue(); },
            "maximum": n => { this.maximum = n.getNumberValue(); },
            "minimum": n => { this.minimum = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.decimalPlaces){
        writer.writeStringValue("decimalPlaces", this.decimalPlaces);
        }
        if(this.displayAs){
        writer.writeStringValue("displayAs", this.displayAs);
        }
        if(this.maximum){
        writer.writeNumberValue("maximum", this.maximum);
        }
        if(this.minimum){
        writer.writeNumberValue("minimum", this.minimum);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
