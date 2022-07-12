import {createRubricQualityFeedbackModelFromDiscriminatorValue} from './createRubricQualityFeedbackModelFromDiscriminatorValue';
import {createRubricQualitySelectedColumnModelFromDiscriminatorValue} from './createRubricQualitySelectedColumnModelFromDiscriminatorValue';
import {EducationOutcome, RubricQualityFeedbackModel, RubricQualitySelectedColumnModel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRubricOutcome extends EducationOutcome implements Parsable {
    /** A copy of the rubricQualityFeedback property that is made when the grade is released to the student. */
    private _publishedRubricQualityFeedback?: RubricQualityFeedbackModel[] | undefined;
    /** A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student. */
    private _publishedRubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[] | undefined;
    /** A collection of specific feedback for each quality of this rubric. */
    private _rubricQualityFeedback?: RubricQualityFeedbackModel[] | undefined;
    /** The level that the teacher has selected for each quality while grading this assignment. */
    private _rubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[] | undefined;
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
            "publishedRubricQualityFeedback": n => { this.publishedRubricQualityFeedback = n.getCollectionOfObjectValues<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
            "publishedRubricQualitySelectedLevels": n => { this.publishedRubricQualitySelectedLevels = n.getCollectionOfObjectValues<RubricQualitySelectedColumnModel>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
            "rubricQualityFeedback": n => { this.rubricQualityFeedback = n.getCollectionOfObjectValues<RubricQualityFeedbackModel>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
            "rubricQualitySelectedLevels": n => { this.rubricQualitySelectedLevels = n.getCollectionOfObjectValues<RubricQualitySelectedColumnModel>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the publishedRubricQualityFeedback property value. A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     * @returns a rubricQualityFeedbackModel
     */
    public get publishedRubricQualityFeedback() {
        return this._publishedRubricQualityFeedback;
    };
    /**
     * Sets the publishedRubricQualityFeedback property value. A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     * @param value Value to set for the publishedRubricQualityFeedback property.
     */
    public set publishedRubricQualityFeedback(value: RubricQualityFeedbackModel[] | undefined) {
        this._publishedRubricQualityFeedback = value;
    };
    /**
     * Gets the publishedRubricQualitySelectedLevels property value. A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     * @returns a rubricQualitySelectedColumnModel
     */
    public get publishedRubricQualitySelectedLevels() {
        return this._publishedRubricQualitySelectedLevels;
    };
    /**
     * Sets the publishedRubricQualitySelectedLevels property value. A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     * @param value Value to set for the publishedRubricQualitySelectedLevels property.
     */
    public set publishedRubricQualitySelectedLevels(value: RubricQualitySelectedColumnModel[] | undefined) {
        this._publishedRubricQualitySelectedLevels = value;
    };
    /**
     * Gets the rubricQualityFeedback property value. A collection of specific feedback for each quality of this rubric.
     * @returns a rubricQualityFeedbackModel
     */
    public get rubricQualityFeedback() {
        return this._rubricQualityFeedback;
    };
    /**
     * Sets the rubricQualityFeedback property value. A collection of specific feedback for each quality of this rubric.
     * @param value Value to set for the rubricQualityFeedback property.
     */
    public set rubricQualityFeedback(value: RubricQualityFeedbackModel[] | undefined) {
        this._rubricQualityFeedback = value;
    };
    /**
     * Gets the rubricQualitySelectedLevels property value. The level that the teacher has selected for each quality while grading this assignment.
     * @returns a rubricQualitySelectedColumnModel
     */
    public get rubricQualitySelectedLevels() {
        return this._rubricQualitySelectedLevels;
    };
    /**
     * Sets the rubricQualitySelectedLevels property value. The level that the teacher has selected for each quality while grading this assignment.
     * @param value Value to set for the rubricQualitySelectedLevels property.
     */
    public set rubricQualitySelectedLevels(value: RubricQualitySelectedColumnModel[] | undefined) {
        this._rubricQualitySelectedLevels = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("publishedRubricQualityFeedback", this.publishedRubricQualityFeedback);
        writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModel>("publishedRubricQualitySelectedLevels", this.publishedRubricQualitySelectedLevels);
        writer.writeCollectionOfObjectValues<RubricQualityFeedbackModel>("rubricQualityFeedback", this.rubricQualityFeedback);
        writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModel>("rubricQualitySelectedLevels", this.rubricQualitySelectedLevels);
    };
}
