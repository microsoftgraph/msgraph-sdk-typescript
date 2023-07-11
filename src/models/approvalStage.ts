import {Entity} from './entity';
import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ApprovalStage extends Entity, Parsable {
    /**
     * Indicates whether the stage is assigned to the calling user to review. Read-only.
     */
    assignedToMe?: boolean | undefined;
    /**
     * The label provided by the policy creator to identify an approval stage. Read-only.
     */
    displayName?: string | undefined;
    /**
     * The justification associated with the approval stage decision.
     */
    justification?: string | undefined;
    /**
     * The identifier of the reviewer. 00000000-0000-0000-0000-000000000000 if the assigned reviewer hasn't reviewed. Read-only.
     */
    reviewedBy?: Identity | undefined;
    /**
     * The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    reviewedDateTime?: Date | undefined;
    /**
     * The result of this approval record. Possible values include: NotReviewed, Approved, Denied.
     */
    reviewResult?: string | undefined;
    /**
     * The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only.
     */
    status?: string | undefined;
}
