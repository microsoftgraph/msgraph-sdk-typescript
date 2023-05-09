import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerAppliedCategoriesFromDiscriminatorValue} from './createPlannerAppliedCategoriesFromDiscriminatorValue';
import {createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerAssignmentsFromDiscriminatorValue} from './createPlannerAssignmentsFromDiscriminatorValue';
import {createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerTaskDetailsFromDiscriminatorValue} from './createPlannerTaskDetailsFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import {PlannerAssignments} from './plannerAssignments';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerProgressTaskBoardTaskFormat} from './plannerProgressTaskBoardTaskFormat';
import {PlannerTask} from './plannerTask';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePlannerAppliedCategories} from './serializePlannerAppliedCategories';
import {serializePlannerAssignedToTaskBoardTaskFormat} from './serializePlannerAssignedToTaskBoardTaskFormat';
import {serializePlannerAssignments} from './serializePlannerAssignments';
import {serializePlannerBucketTaskBoardTaskFormat} from './serializePlannerBucketTaskBoardTaskFormat';
import {serializePlannerProgressTaskBoardTaskFormat} from './serializePlannerProgressTaskBoardTaskFormat';
import {serializePlannerTaskDetails} from './serializePlannerTaskDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTask(plannerTask: PlannerTask | undefined = {} as PlannerTask) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerTask),
        "activeChecklistItemCount": n => { plannerTask.activeChecklistItemCount = n.getNumberValue(); },
        "appliedCategories": n => { plannerTask.appliedCategories = n.getObjectValue<PlannerAppliedCategories>(createPlannerAppliedCategoriesFromDiscriminatorValue); },
        "assignedToTaskBoardFormat": n => { plannerTask.assignedToTaskBoardFormat = n.getObjectValue<PlannerAssignedToTaskBoardTaskFormat>(createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue); },
        "assigneePriority": n => { plannerTask.assigneePriority = n.getStringValue(); },
        "assignments": n => { plannerTask.assignments = n.getObjectValue<PlannerAssignments>(createPlannerAssignmentsFromDiscriminatorValue); },
        "bucketId": n => { plannerTask.bucketId = n.getStringValue(); },
        "bucketTaskBoardFormat": n => { plannerTask.bucketTaskBoardFormat = n.getObjectValue<PlannerBucketTaskBoardTaskFormat>(createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue); },
        "checklistItemCount": n => { plannerTask.checklistItemCount = n.getNumberValue(); },
        "completedBy": n => { plannerTask.completedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "completedDateTime": n => { plannerTask.completedDateTime = n.getDateValue(); },
        "conversationThreadId": n => { plannerTask.conversationThreadId = n.getStringValue(); },
        "createdBy": n => { plannerTask.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { plannerTask.createdDateTime = n.getDateValue(); },
        "details": n => { plannerTask.details = n.getObjectValue<PlannerTaskDetails>(createPlannerTaskDetailsFromDiscriminatorValue); },
        "dueDateTime": n => { plannerTask.dueDateTime = n.getDateValue(); },
        "hasDescription": n => { plannerTask.hasDescription = n.getBooleanValue(); },
        "orderHint": n => { plannerTask.orderHint = n.getStringValue(); },
        "percentComplete": n => { plannerTask.percentComplete = n.getNumberValue(); },
        "planId": n => { plannerTask.planId = n.getStringValue(); },
        "previewType": n => { plannerTask.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
        "priority": n => { plannerTask.priority = n.getNumberValue(); },
        "progressTaskBoardFormat": n => { plannerTask.progressTaskBoardFormat = n.getObjectValue<PlannerProgressTaskBoardTaskFormat>(createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue); },
        "referenceCount": n => { plannerTask.referenceCount = n.getNumberValue(); },
        "startDateTime": n => { plannerTask.startDateTime = n.getDateValue(); },
        "title": n => { plannerTask.title = n.getStringValue(); },
    }
}
