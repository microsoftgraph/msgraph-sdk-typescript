import {createEducationAssignmentPointsGradeFromDiscriminatorValue} from './createEducationAssignmentPointsGradeFromDiscriminatorValue';
import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationPointsOutcome} from './educationPointsOutcome';
import {EducationAssignmentPointsGradeImpl, EducationOutcomeImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationPointsOutcomeImpl extends EducationOutcomeImpl implements EducationPointsOutcome {
    /** The numeric grade the teacher has given the student for this assignment. */
    private _points?: EducationAssignmentPointsGrade | undefined;
    /** A copy of the points property that is made when the grade is released to the student. */
    private _publishedPoints?: EducationAssignmentPointsGrade | undefined;
    /**
     * Instantiates a new EducationPointsOutcome and sets the default values.
     * @param educationPointsOutcomeParameterValue 
     */
    public constructor(educationPointsOutcomeParameterValue?: EducationPointsOutcome | undefined) {
        super(educationPointsOutcomeParameterValue);
        this._points = educationPointsOutcomeParameterValue?.points;
        this._publishedPoints = educationPointsOutcomeParameterValue?.publishedPoints;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "points": n => { this.points = n.getObjectValue<EducationAssignmentPointsGradeImpl>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
            "publishedPoints": n => { this.publishedPoints = n.getObjectValue<EducationAssignmentPointsGradeImpl>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the points property value. The numeric grade the teacher has given the student for this assignment.
     * @returns a EducationAssignmentPointsGradeInterface
     */
    public get points() {
        return this._points;
    };
    /**
     * Sets the points property value. The numeric grade the teacher has given the student for this assignment.
     * @param value Value to set for the points property.
     */
    public set points(value: EducationAssignmentPointsGrade | undefined) {
        if(value) {
            this._points = value instanceof EducationAssignmentPointsGradeImpl? value : new EducationAssignmentPointsGradeImpl(value);
        }
    };
    /**
     * Gets the publishedPoints property value. A copy of the points property that is made when the grade is released to the student.
     * @returns a EducationAssignmentPointsGradeInterface
     */
    public get publishedPoints() {
        return this._publishedPoints;
    };
    /**
     * Sets the publishedPoints property value. A copy of the points property that is made when the grade is released to the student.
     * @param value Value to set for the publishedPoints property.
     */
    public set publishedPoints(value: EducationAssignmentPointsGrade | undefined) {
        if(value) {
            this._publishedPoints = value instanceof EducationAssignmentPointsGradeImpl? value : new EducationAssignmentPointsGradeImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.points){
            writer.writeObjectValue<EducationAssignmentPointsGradeImpl>("points", (!this.points || this.points instanceof EducationAssignmentPointsGradeImpl? this.points : new EducationAssignmentPointsGradeImpl(this.points)));
        }
        if(this.publishedPoints){
            writer.writeObjectValue<EducationAssignmentPointsGradeImpl>("publishedPoints", (!this.publishedPoints || this.publishedPoints instanceof EducationAssignmentPointsGradeImpl? this.publishedPoints : new EducationAssignmentPointsGradeImpl(this.publishedPoints)));
        }
    };
}
