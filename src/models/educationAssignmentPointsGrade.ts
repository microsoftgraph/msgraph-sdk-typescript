import {EducationAssignmentGrade} from './educationAssignmentGrade';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGrade extends EducationAssignmentGrade, Parsable {
    /**
     * Number of points a teacher is giving this submission object.
     */
    points?: number | undefined;
}
