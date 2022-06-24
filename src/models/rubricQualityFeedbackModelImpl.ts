import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {EducationItemBodyImpl} from './index';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualityFeedbackModelImpl implements RubricQualityFeedbackModel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specific feedback for one quality of this rubric. */
    public feedback?: EducationItemBody | undefined;
    /** The ID of the rubricQuality that this feedback is related to. */
    public qualityId?: string | undefined;
    /**
     * Instantiates a new rubricQualityFeedbackModel and sets the default values.
     * @param rubricQualityFeedbackModelParameterValue 
     */
    public constructor(rubricQualityFeedbackModelParameterValue?: RubricQualityFeedbackModel | undefined) {
        this.additionalData = rubricQualityFeedbackModelParameterValue?.additionalData ? rubricQualityFeedbackModelParameterValue?.additionalData! : {};
        this.feedback = rubricQualityFeedbackModelParameterValue?.feedback instanceof EducationItemBodyImpl? rubricQualityFeedbackModelParameterValue?.feedback:new EducationItemBodyImpl(rubricQualityFeedbackModelParameterValue?.feedback);
        this.qualityId = rubricQualityFeedbackModelParameterValue?.qualityId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "feedback": n => { this.feedback = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.feedback){
            writer.writeObjectValue<EducationItemBodyImpl>("feedback", new EducationItemBodyImpl(this.feedback));
        }
        if(this.qualityId){
            writer.writeStringValue("qualityId", this.qualityId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
