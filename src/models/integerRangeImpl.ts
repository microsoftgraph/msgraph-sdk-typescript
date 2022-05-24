import {IntegerRange} from './integerRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IntegerRangeImpl implements AdditionalDataHolder, IntegerRange, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The inclusive upper bound of the integer range. */
    public end?: number | undefined;
    /** The inclusive lower bound of the integer range. */
    public start?: number | undefined;
    /**
     * Instantiates a new integerRange and sets the default values.
     * @param integerRangeParameterValue 
     */
    public constructor(integerRangeParameterValue?: IntegerRange | undefined) {
        this.additionalData = integerRangeParameterValue?.additionalData ? integerRangeParameterValue?.additionalData! : {}
        this.end = integerRangeParameterValue?.end ;
        this.start = integerRangeParameterValue?.start ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getNumberValue(); },
            "start": n => { this.start = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.end){
        writer.writeNumberValue("end", this.end);
        }
        if(this.start){
        writer.writeNumberValue("start", this.start);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
