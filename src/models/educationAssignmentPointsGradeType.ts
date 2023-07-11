import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentPointsGradeType extends EducationAssignmentGradeType, Parsable {
    /**
     * Max points possible for this assignment.
     */
    maxPoints?: number | undefined;
}
