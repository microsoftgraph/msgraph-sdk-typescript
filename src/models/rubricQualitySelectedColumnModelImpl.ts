import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualitySelectedColumnModelImpl implements RubricQualitySelectedColumnModel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** ID of the selected level for this quality. */
    public columnId?: string | undefined;
    /** ID of the associated quality. */
    public qualityId?: string | undefined;
    /**
     * Instantiates a new rubricQualitySelectedColumnModel and sets the default values.
     * @param rubricQualitySelectedColumnModelParameterValue 
     */
    public constructor(rubricQualitySelectedColumnModelParameterValue?: RubricQualitySelectedColumnModel | undefined) {
        this.additionalData = rubricQualitySelectedColumnModelParameterValue?.additionalData ? rubricQualitySelectedColumnModelParameterValue?.additionalData! : {};
        this.columnId = rubricQualitySelectedColumnModelParameterValue?.columnId;
        this.qualityId = rubricQualitySelectedColumnModelParameterValue?.qualityId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "columnId": n => { this.columnId = n.getStringValue(); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.columnId){
            writer.writeStringValue("columnId", this.columnId);
        }
        if(this.qualityId){
            writer.writeStringValue("qualityId", this.qualityId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
