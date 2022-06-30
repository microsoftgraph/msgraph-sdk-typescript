import {createEducationFeedbackFromDiscriminatorValue} from './createEducationFeedbackFromDiscriminatorValue';
import {EducationFeedback} from './educationFeedback';
import {EducationFeedbackOutcome} from './educationFeedbackOutcome';
import {EducationFeedbackImpl, EducationOutcomeImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackOutcomeImpl extends EducationOutcomeImpl implements EducationFeedbackOutcome {
    /** Teacher's written feedback to the student. */
    private _feedback?: EducationFeedback | undefined;
    /** A copy of the feedback property that is made when the grade is released to the student. */
    private _publishedFeedback?: EducationFeedback | undefined;
    /**
     * Instantiates a new EducationFeedbackOutcome and sets the default values.
     * @param educationFeedbackOutcomeParameterValue 
     */
    public constructor(educationFeedbackOutcomeParameterValue?: EducationFeedbackOutcome | undefined) {
        super(educationFeedbackOutcomeParameterValue);
        this._feedback = educationFeedbackOutcomeParameterValue?.feedback;
        this._publishedFeedback = educationFeedbackOutcomeParameterValue?.publishedFeedback;
    };
    /**
     * Gets the feedback property value. Teacher's written feedback to the student.
     * @returns a EducationFeedbackInterface
     */
    public get feedback() {
        return this._feedback;
    };
    /**
     * Sets the feedback property value. Teacher's written feedback to the student.
     * @param value Value to set for the feedback property.
     */
    public set feedback(value: EducationFeedback | undefined) {
        if(value) {
            this._feedback = value instanceof EducationFeedbackImpl? value : new EducationFeedbackImpl(value);
        }
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
     * Gets the publishedFeedback property value. A copy of the feedback property that is made when the grade is released to the student.
     * @returns a EducationFeedbackInterface
     */
    public get publishedFeedback() {
        return this._publishedFeedback;
    };
    /**
     * Sets the publishedFeedback property value. A copy of the feedback property that is made when the grade is released to the student.
     * @param value Value to set for the publishedFeedback property.
     */
    public set publishedFeedback(value: EducationFeedback | undefined) {
        if(value) {
            this._publishedFeedback = value instanceof EducationFeedbackImpl? value : new EducationFeedbackImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.feedback){
            writer.writeObjectValue<EducationFeedbackImpl>("feedback", (!this.feedback || this.feedback instanceof EducationFeedbackImpl? this.feedback : new EducationFeedbackImpl(this.feedback)));
        }
        if(this.publishedFeedback){
            writer.writeObjectValue<EducationFeedbackImpl>("publishedFeedback", (!this.publishedFeedback || this.publishedFeedback instanceof EducationFeedbackImpl? this.publishedFeedback : new EducationFeedbackImpl(this.publishedFeedback)));
        }
    };
}
