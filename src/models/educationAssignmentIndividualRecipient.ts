import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentIndividualRecipient extends Partial<AdditionalDataHolder>, EducationAssignmentRecipient, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of ids of the recipients. */
    recipients?: string[] | undefined;
}
