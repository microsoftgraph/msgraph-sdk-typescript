import {IdentitySet} from './identitySet';
import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import {PlannerAssignments} from './plannerAssignments';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerProgressTaskBoardTaskFormat} from './plannerProgressTaskBoardTaskFormat';
import {PlannerTask} from './plannerTask';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializePlannerAppliedCategories} from './serializePlannerAppliedCategories';
import {serializePlannerAssignedToTaskBoardTaskFormat} from './serializePlannerAssignedToTaskBoardTaskFormat';
import {serializePlannerAssignments} from './serializePlannerAssignments';
import {serializePlannerBucketTaskBoardTaskFormat} from './serializePlannerBucketTaskBoardTaskFormat';
import {serializePlannerProgressTaskBoardTaskFormat} from './serializePlannerProgressTaskBoardTaskFormat';
import {serializePlannerTaskDetails} from './serializePlannerTaskDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTask(writer: SerializationWriter, plannerTask: PlannerTask | undefined = {} as PlannerTask) : void {
        serializeEntity(writer, plannerTask)
        writer.writeNumberValue("activeChecklistItemCount", plannerTask.activeChecklistItemCount);
        writer.writeObjectValue<PlannerAppliedCategories>("appliedCategories", plannerTask.appliedCategories, serializePlannerAppliedCategories);
        writer.writeObjectValue<PlannerAssignedToTaskBoardTaskFormat>("assignedToTaskBoardFormat", plannerTask.assignedToTaskBoardFormat, serializePlannerAssignedToTaskBoardTaskFormat);
        writer.writeStringValue("assigneePriority", plannerTask.assigneePriority);
        writer.writeObjectValue<PlannerAssignments>("assignments", plannerTask.assignments, serializePlannerAssignments);
        writer.writeStringValue("bucketId", plannerTask.bucketId);
        writer.writeObjectValue<PlannerBucketTaskBoardTaskFormat>("bucketTaskBoardFormat", plannerTask.bucketTaskBoardFormat, serializePlannerBucketTaskBoardTaskFormat);
        writer.writeNumberValue("checklistItemCount", plannerTask.checklistItemCount);
        writer.writeObjectValue<IdentitySet>("completedBy", plannerTask.completedBy, serializeIdentitySet);
        writer.writeDateValue("completedDateTime", plannerTask.completedDateTime);
        writer.writeStringValue("conversationThreadId", plannerTask.conversationThreadId);
        writer.writeObjectValue<IdentitySet>("createdBy", plannerTask.createdBy, serializeIdentitySet);
        writer.writeDateValue("createdDateTime", plannerTask.createdDateTime);
        writer.writeObjectValue<PlannerTaskDetails>("details", plannerTask.details, serializePlannerTaskDetails);
        writer.writeDateValue("dueDateTime", plannerTask.dueDateTime);
        writer.writeBooleanValue("hasDescription", plannerTask.hasDescription);
        writer.writeStringValue("orderHint", plannerTask.orderHint);
        writer.writeNumberValue("percentComplete", plannerTask.percentComplete);
        writer.writeStringValue("planId", plannerTask.planId);
        writer.writeEnumValue<PlannerPreviewType>("previewType", plannerTask.previewType);
        writer.writeNumberValue("priority", plannerTask.priority);
        writer.writeObjectValue<PlannerProgressTaskBoardTaskFormat>("progressTaskBoardFormat", plannerTask.progressTaskBoardFormat, serializePlannerProgressTaskBoardTaskFormat);
        writer.writeNumberValue("referenceCount", plannerTask.referenceCount);
        writer.writeDateValue("startDateTime", plannerTask.startDateTime);
        writer.writeStringValue("title", plannerTask.title);
}
