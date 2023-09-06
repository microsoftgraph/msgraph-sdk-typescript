import { type EducationSubmissionRecipient } from './educationSubmissionRecipient';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationSubmissionIndividualRecipient extends EducationSubmissionRecipient, Parsable {
    /**
     * User ID of the user to whom the submission is assigned.
     */
    userId?: string | undefined;
}
