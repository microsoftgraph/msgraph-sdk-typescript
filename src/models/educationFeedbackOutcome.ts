import {EducationFeedback} from './educationFeedback';
import {EducationOutcome} from './educationOutcome';
import {Parsable} from '@microsoft/kiota-abstractions';

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
