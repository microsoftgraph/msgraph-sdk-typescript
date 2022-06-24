import {createRubricQualityFeedbackModelFromDiscriminatorValue} from './createRubricQualityFeedbackModelFromDiscriminatorValue';
import {createRubricQualitySelectedColumnModelFromDiscriminatorValue} from './createRubricQualitySelectedColumnModelFromDiscriminatorValue';
import {EducationRubricOutcome} from './educationRubricOutcome';
import {EducationOutcomeImpl, RubricQualityFeedbackModelImpl, RubricQualitySelectedColumnModelImpl} from './index';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRubricOutcomeImpl extends EducationOutcomeImpl implements EducationRubricOutcome {
    /** A copy of the rubricQualityFeedback property that is made when the grade is released to the student. */
    public publishedRubricQualityFeedback?: RubricQualityFeedbackModel[] | undefined;
    /** A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student. */
    public publishedRubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[] | undefined;
    /** A collection of specific feedback for each quality of this rubric. */
    public rubricQualityFeedback?: RubricQualityFeedbackModel[] | undefined;
    /** The level that the teacher has selected for each quality while grading this assignment. */
    public rubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[] | undefined;
    /**
     * Instantiates a new EducationRubricOutcome and sets the default values.
     * @param educationRubricOutcomeParameterValue 
     */
    public constructor(educationRubricOutcomeParameterValue?: EducationRubricOutcome | undefined) {
        super(educationRubricOutcomeParameterValue);
        const publishedRubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = []; educationRubricOutcomeParameterValue.publishedRubricQualityFeedback?.forEach(element => {publishedRubricQualityFeedbackArrValue.push(element instanceof RubricQualityFeedbackModelImpl? element : new RubricQualityFeedbackModelImpl(element));});
        this.publishedRubricQualityFeedback = publishedRubricQualityFeedbackArrValue;
        const publishedRubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = []; educationRubricOutcomeParameterValue.publishedRubricQualitySelectedLevels?.forEach(element => {publishedRubricQualitySelectedLevelsArrValue.push(element instanceof RubricQualitySelectedColumnModelImpl? element : new RubricQualitySelectedColumnModelImpl(element));});
        this.publishedRubricQualitySelectedLevels = publishedRubricQualitySelectedLevelsArrValue;
        const rubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = []; educationRubricOutcomeParameterValue.rubricQualityFeedback?.forEach(element => {rubricQualityFeedbackArrValue.push(element instanceof RubricQualityFeedbackModelImpl? element : new RubricQualityFeedbackModelImpl(element));});
        this.rubricQualityFeedback = rubricQualityFeedbackArrValue;
        const rubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = []; educationRubricOutcomeParameterValue.rubricQualitySelectedLevels?.forEach(element => {rubricQualitySelectedLevelsArrValue.push(element instanceof RubricQualitySelectedColumnModelImpl? element : new RubricQualitySelectedColumnModelImpl(element));});
        this.rubricQualitySelectedLevels = rubricQualitySelectedLevelsArrValue;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.publishedRubricQualityFeedback && this.publishedRubricQualityFeedback.length != 0){        const publishedRubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = []; this.publishedRubricQualityFeedback?.forEach(element => {publishedRubricQualityFeedbackArrValue.push(element instanceof RubricQualityFeedbackModelImpl? element : new RubricQualityFeedbackModelImpl(element));});
            writer.writeCollectionOfObjectValues<RubricQualityFeedbackModelImpl>("publishedRubricQualityFeedback", publishedRubricQualityFeedbackArrValue);
        }
        if(this.publishedRubricQualitySelectedLevels && this.publishedRubricQualitySelectedLevels.length != 0){        const publishedRubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = []; this.publishedRubricQualitySelectedLevels?.forEach(element => {publishedRubricQualitySelectedLevelsArrValue.push(element instanceof RubricQualitySelectedColumnModelImpl? element : new RubricQualitySelectedColumnModelImpl(element));});
            writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModelImpl>("publishedRubricQualitySelectedLevels", publishedRubricQualitySelectedLevelsArrValue);
        }
        if(this.rubricQualityFeedback && this.rubricQualityFeedback.length != 0){        const rubricQualityFeedbackArrValue: RubricQualityFeedbackModelImpl[] = []; this.rubricQualityFeedback?.forEach(element => {rubricQualityFeedbackArrValue.push(element instanceof RubricQualityFeedbackModelImpl? element : new RubricQualityFeedbackModelImpl(element));});
            writer.writeCollectionOfObjectValues<RubricQualityFeedbackModelImpl>("rubricQualityFeedback", rubricQualityFeedbackArrValue);
        }
        if(this.rubricQualitySelectedLevels && this.rubricQualitySelectedLevels.length != 0){        const rubricQualitySelectedLevelsArrValue: RubricQualitySelectedColumnModelImpl[] = []; this.rubricQualitySelectedLevels?.forEach(element => {rubricQualitySelectedLevelsArrValue.push(element instanceof RubricQualitySelectedColumnModelImpl? element : new RubricQualitySelectedColumnModelImpl(element));});
            writer.writeCollectionOfObjectValues<RubricQualitySelectedColumnModelImpl>("rubricQualitySelectedLevels", rubricQualitySelectedLevelsArrValue);
        }
    };
}
