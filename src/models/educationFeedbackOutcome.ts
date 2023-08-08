import type {EducationFeedback} from './educationFeedback';
import type {EducationOutcome} from './educationOutcome';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackOutcome extends EducationOutcome, Parsable {
    /**
     * Teacher's written feedback to the student.
     */
    feedback?: EducationFeedback | undefined;
    /**
     * A copy of the feedback property that is made when the grade is released to the student.
     */
    publishedFeedback?: EducationFeedback | undefined;
}
