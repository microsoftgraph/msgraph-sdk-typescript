import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationOutcome} from './educationOutcome';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationPointsOutcome extends Partial<AdditionalDataHolder>, EducationOutcome, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The numeric grade the teacher has given the student for this assignment. */
    points?: EducationAssignmentPointsGrade | undefined;
    /** A copy of the points property that is made when the grade is released to the student. */
    publishedPoints?: EducationAssignmentPointsGrade | undefined;
}
