import {EducationOutcome} from './educationOutcome';
import {EducationSubmissionRecipient} from './educationSubmissionRecipient';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionStatus} from './educationSubmissionStatus';
import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSubmission extends Entity, Parsable {
    /**
     * The outcomes property
     */
    outcomes?: EducationOutcome[] | undefined;
    /**
     * User who moved the status of this submission to reassigned.
     */
    reassignedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the submission was reassigned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    reassignedDateTime?: Date | undefined;
    /**
     * Who this submission is assigned to.
     */
    recipient?: EducationSubmissionRecipient | undefined;
    /**
     * The resources property
     */
    resources?: EducationSubmissionResource[] | undefined;
    /**
     * Folder where all file resources for this submission need to be stored.
     */
    resourcesFolderUrl?: string | undefined;
    /**
     * User who moved the status of this submission to returned.
     */
    returnedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    returnedDateTime?: Date | undefined;
    /**
     * Read-only. Possible values are: working, submitted, returned, and reassigned. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: reassigned.
     */
    status?: EducationSubmissionStatus | undefined;
    /**
     * User who moved the resource into the submitted state.
     */
    submittedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    submittedDateTime?: Date | undefined;
    /**
     * The submittedResources property
     */
    submittedResources?: EducationSubmissionResource[] | undefined;
    /**
     * User who moved the resource from submitted into the working state.
     */
    unsubmittedBy?: IdentitySet | undefined;
    /**
     * Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    unsubmittedDateTime?: Date | undefined;
}
