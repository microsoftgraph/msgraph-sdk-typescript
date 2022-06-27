import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmissionIndividualRecipient extends Partial<AdditionalDataHolder>, EducationSubmissionRecipient, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** User ID of the user to whom the submission is assigned. */
    userId?: string | undefined;
}
