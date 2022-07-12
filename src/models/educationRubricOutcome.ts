import {AdminMember1, EducationOutcome, RubricQualityFeedbackModel, RubricQualitySelectedColumnModel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRubricOutcome extends EducationOutcome implements Parsable {
    /** A copy of the rubricQualityFeedback property that is made when the grade is released to the student. */
    private _publishedRubricQualityFeedback?: RubricQualityFeedbackModel | AdminMember1[] | undefined;
    /** A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student. */
    private _publishedRubricQualitySelectedLevels?: RubricQualitySelectedColumnModel | AdminMember1[] | undefined;
    /** A collection of specific feedback for each quality of this rubric. */
    private _rubricQualityFeedback?: RubricQualityFeedbackModel | AdminMember1[] | undefined;
    /** The level that the teacher has selected for each quality while grading this assignment. */
    private _rubricQualitySelectedLevels?: RubricQualitySelectedColumnModel | AdminMember1[] | undefined;
    /**
     * Instantiates a new EducationRubricOutcome and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "publishedRubricQualityFeedback": n => { this.publishedRubricQualityFeedback = n.getObjectValue<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
            "publishedRubricQualitySelectedLevels": n => { this.publishedRubricQualitySelectedLevels = n.getObjectValue<RubricQualitySelectedColumnModel>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
            "rubricQualityFeedback": n => { this.rubricQualityFeedback = n.getObjectValue<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
            "rubricQualitySelectedLevels": n => { this.rubricQualitySelectedLevels = n.getObjectValue<RubricQualitySelectedColumnModel>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the publishedRubricQualityFeedback property value. A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     * @returns a admin
     */
    public get publishedRubricQualityFeedback() {
        return this._publishedRubricQualityFeedback;
    };
    /**
     * Sets the publishedRubricQualityFeedback property value. A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     * @param value Value to set for the publishedRubricQualityFeedback property.
     */
    public set publishedRubricQualityFeedback(value: RubricQualityFeedbackModel | AdminMember1[] | undefined) {
        this._publishedRubricQualityFeedback = value;
    };
    /**
     * Gets the publishedRubricQualitySelectedLevels property value. A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     * @returns a admin
     */
    public get publishedRubricQualitySelectedLevels() {
        return this._publishedRubricQualitySelectedLevels;
    };
    /**
     * Sets the publishedRubricQualitySelectedLevels property value. A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     * @param value Value to set for the publishedRubricQualitySelectedLevels property.
     */
    public set publishedRubricQualitySelectedLevels(value: RubricQualitySelectedColumnModel | AdminMember1[] | undefined) {
        this._publishedRubricQualitySelectedLevels = value;
    };
    /**
     * Gets the rubricQualityFeedback property value. A collection of specific feedback for each quality of this rubric.
     * @returns a admin
     */
    public get rubricQualityFeedback() {
        return this._rubricQualityFeedback;
    };
    /**
     * Sets the rubricQualityFeedback property value. A collection of specific feedback for each quality of this rubric.
     * @param value Value to set for the rubricQualityFeedback property.
     */
    public set rubricQualityFeedback(value: RubricQualityFeedbackModel | AdminMember1[] | undefined) {
        this._rubricQualityFeedback = value;
    };
    /**
     * Gets the rubricQualitySelectedLevels property value. The level that the teacher has selected for each quality while grading this assignment.
     * @returns a admin
     */
    public get rubricQualitySelectedLevels() {
        return this._rubricQualitySelectedLevels;
    };
    /**
     * Sets the rubricQualitySelectedLevels property value. The level that the teacher has selected for each quality while grading this assignment.
     * @param value Value to set for the rubricQualitySelectedLevels property.
     */
    public set rubricQualitySelectedLevels(value: RubricQualitySelectedColumnModel | AdminMember1[] | undefined) {
        this._rubricQualitySelectedLevels = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<RubricQualityFeedbackModel>("publishedRubricQualityFeedback", this.publishedRubricQualityFeedback);
        writer.writeObjectValue<RubricQualitySelectedColumnModel>("publishedRubricQualitySelectedLevels", this.publishedRubricQualitySelectedLevels);
        writer.writeObjectValue<RubricQualityFeedbackModel>("rubricQualityFeedback", this.rubricQualityFeedback);
        writer.writeObjectValue<RubricQualitySelectedColumnModel>("rubricQualitySelectedLevels", this.rubricQualitySelectedLevels);
    };
}
