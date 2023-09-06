import { type EducationAssignmentRecipient } from './educationAssignmentRecipient';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationAssignmentIndividualRecipient extends EducationAssignmentRecipient, Parsable {
    /**
     * A collection of IDs of the recipients.
     */
    recipients?: string[] | undefined;
}
