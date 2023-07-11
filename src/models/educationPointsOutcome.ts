import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationOutcome} from './educationOutcome';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationPointsOutcome extends EducationOutcome, Parsable {
    /**
     * The numeric grade the teacher has given the student for this assignment.
     */
    points?: EducationAssignmentPointsGrade | undefined;
    /**
     * A copy of the points property that is made when the grade is released to the student.
     */
    publishedPoints?: EducationAssignmentPointsGrade | undefined;
}
