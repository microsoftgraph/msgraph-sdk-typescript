import {EducationFeedback} from './educationFeedback';
import {EducationOutcome} from './educationOutcome';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedbackOutcome extends Partial<AdditionalDataHolder>, EducationOutcome, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Teacher's written feedback to the student. */
    feedback?: EducationFeedback | undefined;
    /** A copy of the feedback property that is made when the grade is released to the student. */
    publishedFeedback?: EducationFeedback | undefined;
}
