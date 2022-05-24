import {ControlScore} from './controlScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ControlScoreImpl implements AdditionalDataHolder, ControlScore, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Control action category (Identity, Data, Device, Apps, Infrastructure). */
    public controlCategory?: string | undefined;
    /** Control unique name. */
    public controlName?: string | undefined;
    /** Description of the control. */
    public description?: string | undefined;
    /** Tenant achieved score for the control (it varies day by day depending on tenant operations on the control). */
    public score?: number | undefined;
    /**
     * Instantiates a new controlScore and sets the default values.
     * @param controlScoreParameterValue 
     */
    public constructor(controlScoreParameterValue?: ControlScore | undefined) {
        this.additionalData = controlScoreParameterValue?.additionalData ? controlScoreParameterValue?.additionalData! : {}
        this.controlCategory = controlScoreParameterValue?.controlCategory ;
        this.controlName = controlScoreParameterValue?.controlName ;
        this.description = controlScoreParameterValue?.description ;
        this.score = controlScoreParameterValue?.score ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "controlCategory": n => { this.controlCategory = n.getStringValue(); },
            "controlName": n => { this.controlName = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "score": n => { this.score = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.controlCategory){
        writer.writeStringValue("controlCategory", this.controlCategory);
        }
        if(this.controlName){
        writer.writeStringValue("controlName", this.controlName);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.score){
        writer.writeNumberValue("score", this.score);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
