import { type EducationAssignmentGrade } from './educationAssignmentGrade';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGrade extends EducationAssignmentGrade, Parsable {
    /**
     * Number of points a teacher is giving this submission object.
     */
    points?: number | undefined;
}
