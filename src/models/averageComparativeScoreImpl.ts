import {AverageComparativeScore} from './averageComparativeScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AverageComparativeScoreImpl implements AverageComparativeScore {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Average score within specified basis. */
    private _averageScore?: number | undefined;
    /** Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes. */
    private _basis?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the averageScore property value. Average score within specified basis.
     * @returns a double
     */
    public get averageScore() {
        return this._averageScore;
    };
    /**
     * Sets the averageScore property value. Average score within specified basis.
     * @param value Value to set for the averageScore property.
     */
    public set averageScore(value: number | undefined) {
        if(value) {
            this._averageScore = value;
        }
    };
    /**
     * Gets the basis property value. Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     * @returns a string
     */
    public get basis() {
        return this._basis;
    };
    /**
     * Sets the basis property value. Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     * @param value Value to set for the basis property.
     */
    public set basis(value: string | undefined) {
        if(value) {
            this._basis = value;
        }
    };
    /**
     * Instantiates a new averageComparativeScore and sets the default values.
     * @param averageComparativeScoreParameterValue 
     */
    public constructor(averageComparativeScoreParameterValue?: AverageComparativeScore | undefined) {
        this._additionalData = averageComparativeScoreParameterValue?.additionalData ? averageComparativeScoreParameterValue?.additionalData! : {};
        this._averageScore = averageComparativeScoreParameterValue?.averageScore;
        this._basis = averageComparativeScoreParameterValue?.basis;
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
