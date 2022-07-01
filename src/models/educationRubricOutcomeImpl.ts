import {createRubricQualityFeedbackModelFromDiscriminatorValue} from './createRubricQualityFeedbackModelFromDiscriminatorValue';
import {createRubricQualitySelectedColumnModelFromDiscriminatorValue} from './createRubricQualitySelectedColumnModelFromDiscriminatorValue';
import {EducationRubricOutcome} from './educationRubricOutcome';
import {EducationOutcomeImpl, RubricQualityFeedbackModelImpl, RubricQualitySelectedColumnModelImpl} from './index';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRubricOutcomeImpl extends EducationOutcomeImpl implements EducationRubricOutcome {
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
     * @param educationRubricOutcomeParameterValue 
     */
    public constructor(educationRubricOutcomeParameterValue?: EducationRubricOutcome | undefined) {
        super(educationRubricOutcomeParameterValue);
        this._publishedRubricQualityFeedback = educationRubricOutcomeParameterValue?.publishedRubricQualityFeedback;
        this._publishedRubricQualitySelectedLevels = educationRubricOutcomeParameterValue?.publishedRubricQualitySelectedLevels;
        this._rubricQualityFeedback = educationRubricOutcomeParameterValue?.rubricQualityFeedback;
        this._rubricQualitySelectedLevels = educationRubricOutcomeParameterValue?.rubricQualitySelectedLevels;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "publishedRubricQualityFeedback": n => { this.publishedRubricQualityFeedback = n.getCollectionOfObjectValues<RubricQualityFeedbackModelImpl>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
            "publishedRubricQualitySelectedLevels": n => { this.publishedRubricQualitySelectedLevels = n.getCollectionOfObjectValues<RubricQualitySelectedColumnModelImpl>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
            "rubricQualityFeedback": n => { this.rubricQualityFeedback = n.getCollectionOfObjectValues<RubricQualityFeedbackModelImpl>(createRubricQualityFeedbackModelFromDiscriminatorValue); },
            "rubricQualitySelectedLevels": n => { this.rubricQualitySelectedLevels = n.getCollectionOfObjectValues<RubricQualitySelectedColumnModelImpl>(createRubricQualitySelectedColumnModelFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the publishedRubricQualityFeedback property value. A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     * @returns a RubricQualityFeedbackModelInterface
     */
    public get publishedRubricQualityFeedback() {
        return this._publishedRubricQualityFeedback;
    };
    /**
     * Sets the publishedRubricQualityFeedback property value. A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     * @param value Value to set for the publishedRubricQualityFeedback property.
     */
    public set publishedRubricQualityFeedback(value: RubricQualityFeedbackModel[] | undefined) {
        if(value) {
            const publishedRubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = [];
            this.publishedRubricQualityFeedback?.forEach(element => {
                publishedRubricQualityFeedbackArrValue.push((element instanceof RubricQualityFeedbackModelImpl? element as RubricQualityFeedbackModelImpl:new RubricQualityFeedbackModelImpl(element)));
            });
            this._publishedRubricQualityFeedback = publishedRubricQualityFeedbackArrValue;
        }
    };
    /**
     * Gets the publishedRubricQualitySelectedLevels property value. A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     * @returns a RubricQualitySelectedColumnModelInterface
     */
    public get publishedRubricQualitySelectedLevels() {
        return this._publishedRubricQualitySelectedLevels;
    };
    /**
     * Sets the publishedRubricQualitySelectedLevels property value. A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     * @param value Value to set for the publishedRubricQualitySelectedLevels property.
     */
    public set publishedRubricQualitySelectedLevels(value: RubricQualitySelectedColumnModel[] | undefined) {
        if(value) {
            const publishedRubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = [];
            this.publishedRubricQualitySelectedLevels?.forEach(element => {
                publishedRubricQualitySelectedLevelsArrValue.push((element instanceof RubricQualitySelectedColumnModelImpl? element as RubricQualitySelectedColumnModelImpl:new RubricQualitySelectedColumnModelImpl(element)));
            });
            this._publishedRubricQualitySelectedLevels = publishedRubricQualitySelectedLevelsArrValue;
        }
    };
    /**
     * Gets the rubricQualityFeedback property value. A collection of specific feedback for each quality of this rubric.
     * @returns a RubricQualityFeedbackModelInterface
     */
    public get rubricQualityFeedback() {
        return this._rubricQualityFeedback;
    };
    /**
     * Sets the rubricQualityFeedback property value. A collection of specific feedback for each quality of this rubric.
     * @param value Value to set for the rubricQualityFeedback property.
     */
    public set rubricQualityFeedback(value: RubricQualityFeedbackModel[] | undefined) {
        if(value) {
            const rubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = [];
            this.rubricQualityFeedback?.forEach(element => {
                rubricQualityFeedbackArrValue.push((element instanceof RubricQualityFeedbackModelImpl? element as RubricQualityFeedbackModelImpl:new RubricQualityFeedbackModelImpl(element)));
            });
            this._rubricQualityFeedback = rubricQualityFeedbackArrValue;
        }
    };
    /**
     * Gets the rubricQualitySelectedLevels property value. The level that the teacher has selected for each quality while grading this assignment.
     * @returns a RubricQualitySelectedColumnModelInterface
     */
    public get rubricQualitySelectedLevels() {
        return this._rubricQualitySelectedLevels;
    };
    /**
     * Sets the rubricQualitySelectedLevels property value. The level that the teacher has selected for each quality while grading this assignment.
     * @param value Value to set for the rubricQualitySelectedLevels property.
     */
    public set rubricQualitySelectedLevels(value: RubricQualitySelectedColumnModel[] | undefined) {
        if(value) {
            const rubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = [];
            this.rubricQualitySelectedLevels?.forEach(element => {
                rubricQualitySelectedLevelsArrValue.push((element instanceof RubricQualitySelectedColumnModelImpl? element as RubricQualitySelectedColumnModelImpl:new RubricQualitySelectedColumnModelImpl(element)));
            });
            this._rubricQualitySelectedLevels = rubricQualitySelectedLevelsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.publishedRubricQualityFeedback && this.publishedRubricQualityFeedback.length != 0){        const publishedRubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = [];
        this.publishedRubricQualityFeedback?.forEach(element => {
            publishedRubricQualityFeedbackArrValue.push((element instanceof RubricQualityFeedbackModelImpl? element as RubricQualityFeedbackModelImpl:new RubricQualityFeedbackModelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricQualityFeedbackModelImpl>("publishedRubricQualityFeedback", publishedRubricQualityFeedbackArrValue);
        }
        if(this.publishedRubricQualitySelectedLevels && this.publishedRubricQualitySelectedLevels.length != 0){        const publishedRubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = [];
        this.publishedRubricQualitySelectedLevels?.forEach(element => {
            publishedRubricQualitySelectedLevelsArrValue.push((element instanceof RubricQualitySelectedColumnModelImpl? element as RubricQualitySelectedColumnModelImpl:new RubricQualitySelectedColumnModelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModelImpl>("publishedRubricQualitySelectedLevels", publishedRubricQualitySelectedLevelsArrValue);
        }
        if(this.rubricQualityFeedback && this.rubricQualityFeedback.length != 0){        const rubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = [];
        this.rubricQualityFeedback?.forEach(element => {
            rubricQualityFeedbackArrValue.push((element instanceof RubricQualityFeedbackModelImpl? element as RubricQualityFeedbackModelImpl:new RubricQualityFeedbackModelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricQualityFeedbackModelImpl>("rubricQualityFeedback", rubricQualityFeedbackArrValue);
        }
        if(this.rubricQualitySelectedLevels && this.rubricQualitySelectedLevels.length != 0){        const rubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = [];
        this.rubricQualitySelectedLevels?.forEach(element => {
            rubricQualitySelectedLevelsArrValue.push((element instanceof RubricQualitySelectedColumnModelImpl? element as RubricQualitySelectedColumnModelImpl:new RubricQualitySelectedColumnModelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModelImpl>("rubricQualitySelectedLevels", rubricQualitySelectedLevelsArrValue);
        }
    };
}
