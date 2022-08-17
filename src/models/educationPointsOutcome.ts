import {createEducationAssignmentPointsGradeFromDiscriminatorValue} from './createEducationAssignmentPointsGradeFromDiscriminatorValue';
import {EducationAssignmentPointsGrade, EducationOutcome} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationPointsOutcome extends EducationOutcome implements Parsable {
    /** The numeric grade the teacher has given the student for this assignment. */
    private _points?: EducationAssignmentPointsGrade | undefined;
    /** A copy of the points property that is made when the grade is released to the student. */
    private _publishedPoints?: EducationAssignmentPointsGrade | undefined;
    /**
     * Instantiates a new EducationPointsOutcome and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.educationPointsOutcome";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "points": n => { this.points = n.getObjectValue<EducationAssignmentPointsGrade>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
            "publishedPoints": n => { this.publishedPoints = n.getObjectValue<EducationAssignmentPointsGrade>(createEducationAssignmentPointsGradeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the points property value. The numeric grade the teacher has given the student for this assignment.
     * @returns a educationAssignmentPointsGrade
     */
    public get points() {
        return this._points;
    };
    /**
     * Sets the points property value. The numeric grade the teacher has given the student for this assignment.
     * @param value Value to set for the points property.
     */
    public set points(value: EducationAssignmentPointsGrade | undefined) {
        this._points = value;
    };
    /**
     * Gets the publishedPoints property value. A copy of the points property that is made when the grade is released to the student.
     * @returns a educationAssignmentPointsGrade
     */
    public get publishedPoints() {
        return this._publishedPoints;
    };
    /**
     * Sets the publishedPoints property value. A copy of the points property that is made when the grade is released to the student.
     * @param value Value to set for the publishedPoints property.
     */
    public set publishedPoints(value: EducationAssignmentPointsGrade | undefined) {
        this._publishedPoints = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EducationAssignmentPointsGrade>("points", this.points);
        writer.writeObjectValue<EducationAssignmentPointsGrade>("publishedPoints", this.publishedPoints);
    };
}
