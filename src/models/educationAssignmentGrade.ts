import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentGrade extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * User who did the grading.
     */
    gradedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the grade was applied to this submission object. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    gradedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
