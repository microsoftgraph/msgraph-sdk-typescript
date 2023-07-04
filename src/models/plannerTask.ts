import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import {PlannerAssignments} from './plannerAssignments';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerProgressTaskBoardTaskFormat} from './plannerProgressTaskBoardTaskFormat';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTask extends Entity, Parsable {
    /**
     * Number of checklist items with value set to false, representing incomplete items.
     */
    activeChecklistItemCount?: number | undefined;
    /**
     * The categories to which the task has been applied. See applied Categories for possible values.
     */
    appliedCategories?: PlannerAppliedCategories | undefined;
    /**
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
     */
    assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat | undefined;
    /**
     * Hint used to order items of this type in a list view. The format is defined as outlined here.
     */
    assigneePriority?: string | undefined;
    /**
     * The set of assignees the task is assigned to.
     */
    assignments?: PlannerAssignments | undefined;
    /**
     * Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service.
     */
    bucketId?: string | undefined;
    /**
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
     */
    bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat | undefined;
    /**
     * Number of checklist items that are present on the task.
     */
    checklistItemCount?: number | undefined;
    /**
     * Identity of the user that completed the task.
     */
    completedBy?: IdentitySet | undefined;
    /**
     * Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    completedDateTime?: Date | undefined;
    /**
     * Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
     */
    conversationThreadId?: string | undefined;
    /**
     * Identity of the user that created the task.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: Date | undefined;
    /**
     * Read-only. Nullable. Additional details about the task.
     */
    details?: PlannerTaskDetails | undefined;
    /**
     * Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    dueDateTime?: Date | undefined;
    /**
     * Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
     */
    hasDescription?: boolean | undefined;
    /**
     * Hint used to order items of this type in a list view. The format is defined as outlined here.
     */
    orderHint?: string | undefined;
    /**
     * Percentage of task completion. When set to 100, the task is considered completed.
     */
    percentComplete?: number | undefined;
    /**
     * Plan ID to which the task belongs.
     */
    planId?: string | undefined;
    /**
     * This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference.
     */
    previewType?: PlannerPreviewType | undefined;
    /**
     * Priority of the task. The valid range of values is between 0 and 10, with the increasing value being lower priority (0 has the highest priority and 10 has the lowest priority).  Currently, Planner interprets values 0 and 1 as 'urgent', 2, 3 and 4 as 'important', 5, 6, and 7 as 'medium', and 8, 9, and 10 as 'low'.  Additionally, Planner sets the value 1 for 'urgent', 3 for 'important', 5 for 'medium', and 9 for 'low'.
     */
    priority?: number | undefined;
    /**
     * Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
     */
    progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat | undefined;
    /**
     * Number of external references that exist on the task.
     */
    referenceCount?: number | undefined;
    /**
     * Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: Date | undefined;
    /**
     * Title of the task.
     */
    title?: string | undefined;
}
