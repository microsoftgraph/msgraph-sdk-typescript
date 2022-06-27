import {createEducationAssignmentPointsGradeFromDiscriminatorValue} from './createEducationAssignmentPointsGradeFromDiscriminatorValue';
import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationPointsOutcome} from './educationPointsOutcome';
import {EducationAssignmentPointsGradeImpl, EducationOutcomeImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationPointsOutcomeImpl extends EducationOutcomeImpl implements EducationPointsOutcome {
    /** The numeric grade the teacher has given the student for this assignment. */
    public points?: EducationAssignmentPointsGrade | undefined;
    /** A copy of the points property that is made when the grade is released to the student. */
    public publishedPoints?: EducationAssignmentPointsGrade | undefined;
    /**
     * Instantiates a new EducationPointsOutcome and sets the default values.
     * @param educationPointsOutcomeParameterValue 
     */
    public constructor(educationPointsOutcomeParameterValue?: EducationPointsOutcome | undefined) {
        super(educationPointsOutcomeParameterValue);
        this.points = educationPointsOutcomeParameterValue?.points instanceof EducationAssignmentPointsGradeImpl? educationPointsOutcomeParameterValue?.points:new EducationAssignmentPointsGradeImpl(educationPointsOutcomeParameterValue?.points);
        this.publishedPoints = educationPointsOutcomeParameterValue?.publishedPoints instanceof EducationAssignmentPointsGradeImpl? educationPointsOutcomeParameterValue?.publishedPoints:new EducationAssignmentPointsGradeImpl(educationPointsOutcomeParameterValue?.publishedPoints);
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.points){
            writer.writeObjectValue<EducationAssignmentPointsGradeImpl>("points", new EducationAssignmentPointsGradeImpl(this.points));
        }
        if(this.publishedPoints){
            writer.writeObjectValue<EducationAssignmentPointsGradeImpl>("publishedPoints", new EducationAssignmentPointsGradeImpl(this.publishedPoints));
        }
    };
}
