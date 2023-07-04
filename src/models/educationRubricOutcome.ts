import {EducationOutcome} from './educationOutcome';
import {RubricQualityFeedbackModel} from './rubricQualityFeedbackModel';
import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubricOutcome extends EducationOutcome, Parsable {
    /**
     * A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
     */
    publishedRubricQualityFeedback?: RubricQualityFeedbackModel[] | undefined;
    /**
     * A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
     */
    publishedRubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[] | undefined;
    /**
     * A collection of specific feedback for each quality of this rubric.
     */
    rubricQualityFeedback?: RubricQualityFeedbackModel[] | undefined;
    /**
     * The level that the teacher has selected for each quality while grading this assignment.
     */
    rubricQualitySelectedLevels?: RubricQualitySelectedColumnModel[] | undefined;
}
