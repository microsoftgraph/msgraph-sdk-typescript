import {createEducationFeedbackFromDiscriminatorValue} from './createEducationFeedbackFromDiscriminatorValue';
import {EducationFeedback} from './educationFeedback';
import {EducationFeedbackOutcome} from './educationFeedbackOutcome';
import {EducationFeedbackImpl, EducationOutcomeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackOutcomeImpl extends EducationOutcomeImpl implements EducationFeedbackOutcome {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Teacher's written feedback to the student. */
    public feedback?: EducationFeedback | undefined;
    /** A copy of the feedback property that is made when the grade is released to the student. */
    public publishedFeedback?: EducationFeedback | undefined;
    /**
     * Instantiates a new EducationFeedbackOutcome and sets the default values.
     * @param educationFeedbackOutcomeParameterValue 
     */
    public constructor(educationFeedbackOutcomeParameterValue?: EducationFeedbackOutcome | undefined) {
        super(educationFeedbackOutcomeParameterValue);
        this.additionalData = educationFeedbackOutcomeParameterValue?.additionalData ? educationFeedbackOutcomeParameterValue?.additionalData! : {};
        this.feedback = educationFeedbackOutcomeParameterValue?.feedback instanceof EducationFeedbackImpl? educationFeedbackOutcomeParameterValue?.feedback:new EducationFeedbackImpl(educationFeedbackOutcomeParameterValue?.feedback);
        this.publishedFeedback = educationFeedbackOutcomeParameterValue?.publishedFeedback instanceof EducationFeedbackImpl? educationFeedbackOutcomeParameterValue?.publishedFeedback:new EducationFeedbackImpl(educationFeedbackOutcomeParameterValue?.publishedFeedback);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "feedback": n => { this.feedback = n.getObjectValue<EducationFeedbackImpl>(createEducationFeedbackFromDiscriminatorValue); },
            "publishedFeedback": n => { this.publishedFeedback = n.getObjectValue<EducationFeedbackImpl>(createEducationFeedbackFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.feedback){
            writer.writeObjectValue<EducationFeedbackImpl>("feedback", new EducationFeedbackImpl(this.feedback));
        }
        if(this.publishedFeedback){
            writer.writeObjectValue<EducationFeedbackImpl>("publishedFeedback", new EducationFeedbackImpl(this.publishedFeedback));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
