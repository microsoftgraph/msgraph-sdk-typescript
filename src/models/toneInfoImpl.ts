import {Tone} from './tone';
import {ToneInfo} from './toneInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ToneInfoImpl implements AdditionalDataHolder, Parsable, ToneInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** An incremental identifier used for ordering DTMF events. */
    public sequenceId?: number | undefined;
    /** Possible values are: tone0, tone1, tone2, tone3, tone4, tone5, tone6, tone7, tone8, tone9, star, pound, a, b, c, d, flash. */
    public tone?: Tone | undefined;
    /**
     * Instantiates a new toneInfo and sets the default values.
     * @param toneInfoParameterValue 
     */
    public constructor(toneInfoParameterValue?: ToneInfo | undefined) {
        this.additionalData = toneInfoParameterValue?.additionalData ? toneInfoParameterValue?.additionalData! : {}
        this.sequenceId = toneInfoParameterValue?.sequenceId ;
        this.tone = toneInfoParameterValue?.tone ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "sequenceId": n => { this.sequenceId = n.getNumberValue(); },
            "tone": n => { this.tone = n.getEnumValue<Tone>(Tone); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.sequenceId){
        writer.writeNumberValue("sequenceId", this.sequenceId);
        }
        if(this.tone){
        writer.writeEnumValue<Tone>("tone", this.tone);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
