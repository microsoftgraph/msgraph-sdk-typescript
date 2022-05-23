import {AverageComparativeScore} from './averageComparativeScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AverageComparativeScoreImpl implements AdditionalDataHolder, AverageComparativeScore, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Average score within specified basis. */
    public averageScore?: number | undefined;
    /** Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes. */
    public basis?: string | undefined;
    /**
     * Instantiates a new averageComparativeScore and sets the default values.
     * @param averageComparativeScoreParameterValue 
     */
    public constructor(averageComparativeScoreParameterValue?: AverageComparativeScore | undefined) {
        this.additionalData = averageComparativeScoreParameterValue?.additionalData ? averageComparativeScoreParameterValue?.additionalData! : {}
        this.averageScore = averageComparativeScoreParameterValue?.averageScore ;
        this.basis = averageComparativeScoreParameterValue?.basis ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "averageScore": n => { this.averageScore = n.getNumberValue(); },
            "basis": n => { this.basis = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.averageScore){
        writer.writeNumberValue("averageScore", this.averageScore);
        }
        if(this.basis){
        writer.writeStringValue("basis", this.basis);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
