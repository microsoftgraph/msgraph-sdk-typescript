import {createEducationFeedbackFromDiscriminatorValue} from './createEducationFeedbackFromDiscriminatorValue';
import {EducationFeedback, EducationOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackOutcome extends EducationOutcome implements Parsable {
    /** Teacher's written feedback to the student. */
    private _feedback?: EducationFeedback | undefined;
    /** A copy of the feedback property that is made when the grade is released to the student. */
    private _publishedFeedback?: EducationFeedback | undefined;
    /**
     * Instantiates a new EducationFeedbackOutcome and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the feedback property value. Teacher's written feedback to the student.
     * @returns a educationFeedback
     */
    public get feedback() {
        return this._feedback;
    };
    /**
     * Sets the feedback property value. Teacher's written feedback to the student.
     * @param value Value to set for the feedback property.
     */
    public set feedback(value: EducationFeedback | undefined) {
        this._feedback = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "feedback": n => { this.feedback = n.getObjectValue<EducationFeedback>(createEducationFeedbackFromDiscriminatorValue); },
            "publishedFeedback": n => { this.publishedFeedback = n.getObjectValue<EducationFeedback>(createEducationFeedbackFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the publishedFeedback property value. A copy of the feedback property that is made when the grade is released to the student.
     * @returns a educationFeedback
     */
    public get publishedFeedback() {
        return this._publishedFeedback;
    };
    /**
     * Sets the publishedFeedback property value. A copy of the feedback property that is made when the grade is released to the student.
     * @param value Value to set for the publishedFeedback property.
     */
    public set publishedFeedback(value: EducationFeedback | undefined) {
        this._publishedFeedback = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EducationFeedback>("feedback", this.feedback);
        writer.writeObjectValue<EducationFeedback>("publishedFeedback", this.publishedFeedback);
    };
}
