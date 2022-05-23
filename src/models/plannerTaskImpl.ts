import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerAppliedCategoriesFromDiscriminatorValue} from './createPlannerAppliedCategoriesFromDiscriminatorValue';
import {createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerAssignmentsFromDiscriminatorValue} from './createPlannerAssignmentsFromDiscriminatorValue';
import {createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerTaskDetailsFromDiscriminatorValue} from './createPlannerTaskDetailsFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, PlannerAppliedCategoriesImpl, PlannerAssignedToTaskBoardTaskFormatImpl, PlannerAssignmentsImpl, PlannerBucketTaskBoardTaskFormatImpl, PlannerProgressTaskBoardTaskFormatImpl, PlannerTaskDetailsImpl} from './index';
import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {PlannerAssignedToTaskBoardTaskFormat} from './plannerAssignedToTaskBoardTaskFormat';
import {PlannerAssignments} from './plannerAssignments';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerProgressTaskBoardTaskFormat} from './plannerProgressTaskBoardTaskFormat';
import {PlannerTask} from './plannerTask';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class PlannerTaskImpl extends EntityImpl implements Parsable, PlannerTask {
    /** Number of checklist items with value set to false, representing incomplete items. */
    public activeChecklistItemCount?: number | undefined;
    /** The categories to which the task has been applied. See applied Categories for possible values. */
    public appliedCategories?: PlannerAppliedCategories | undefined;
    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo. */
    public assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    public assigneePriority?: string | undefined;
    /** The set of assignees the task is assigned to. */
    public assignments?: PlannerAssignments | undefined;
    /** Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service. */
    public bucketId?: string | undefined;
    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket. */
    public bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat | undefined;
    /** Number of checklist items that are present on the task. */
    public checklistItemCount?: number | undefined;
    /** Identity of the user that completed the task. */
    public completedBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public completedDateTime?: Date | undefined;
    /** Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group. */
    public conversationThreadId?: string | undefined;
    /** Identity of the user that created the task. */
    public createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public createdDateTime?: Date | undefined;
    /** Read-only. Nullable. Additional details about the task. */
    public details?: PlannerTaskDetails | undefined;
    /** Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public dueDateTime?: Date | undefined;
    /** Read-only. Value is true if the details object of the task has a non-empty description and false otherwise. */
    public hasDescription?: boolean | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    public orderHint?: string | undefined;
    /** Percentage of task completion. When set to 100, the task is considered completed. */
    public percentComplete?: number | undefined;
    /** Plan ID to which the task belongs. */
    public planId?: string | undefined;
    /** This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. */
    public previewType?: PlannerPreviewType | undefined;
    /** Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority).  Currently, Planner interprets values 0 and 1 as 'urgent', 2 and 3 and 4 as 'important', 5, 6, and 7 as 'medium', and 8, 9, and 10 as 'low'.  Currently, Planner sets the value 1 for 'urgent', 3 for 'important', 5 for 'medium', and 9 for 'low'. */
    public priority?: number | undefined;
    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress. */
    public progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat | undefined;
    /** Number of external references that exist on the task. */
    public referenceCount?: number | undefined;
    /** Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public startDateTime?: Date | undefined;
    /** Title of the task. */
    public title?: string | undefined;
    /**
     * Instantiates a new plannerTask and sets the default values.
     * @param plannerTaskParameterValue 
     */
    public constructor(plannerTaskParameterValue?: PlannerTask | undefined) {
        super();
        this.activeChecklistItemCount = plannerTaskParameterValue?.activeChecklistItemCount ;
        this.appliedCategories = plannerTaskParameterValue?.appliedCategories ;
        this.assignedToTaskBoardFormat = plannerTaskParameterValue?.assignedToTaskBoardFormat ;
        this.assigneePriority = plannerTaskParameterValue?.assigneePriority ;
        this.assignments = plannerTaskParameterValue?.assignments ;
        this.bucketId = plannerTaskParameterValue?.bucketId ;
        this.bucketTaskBoardFormat = plannerTaskParameterValue?.bucketTaskBoardFormat ;
        this.checklistItemCount = plannerTaskParameterValue?.checklistItemCount ;
        this.completedBy = plannerTaskParameterValue?.completedBy ;
        this.completedDateTime = plannerTaskParameterValue?.completedDateTime ;
        this.conversationThreadId = plannerTaskParameterValue?.conversationThreadId ;
        this.createdBy = plannerTaskParameterValue?.createdBy ;
        this.createdDateTime = plannerTaskParameterValue?.createdDateTime ;
        this.details = plannerTaskParameterValue?.details ;
        this.dueDateTime = plannerTaskParameterValue?.dueDateTime ;
        this.hasDescription = plannerTaskParameterValue?.hasDescription ;
        this.orderHint = plannerTaskParameterValue?.orderHint ;
        this.percentComplete = plannerTaskParameterValue?.percentComplete ;
        this.planId = plannerTaskParameterValue?.planId ;
        this.previewType = plannerTaskParameterValue?.previewType ;
        this.priority = plannerTaskParameterValue?.priority ;
        this.progressTaskBoardFormat = plannerTaskParameterValue?.progressTaskBoardFormat ;
        this.referenceCount = plannerTaskParameterValue?.referenceCount ;
        this.startDateTime = plannerTaskParameterValue?.startDateTime ;
        this.title = plannerTaskParameterValue?.title ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeChecklistItemCount": n => { this.activeChecklistItemCount = n.getNumberValue(); },
            "appliedCategories": n => { this.appliedCategories = n.getObjectValue<PlannerAppliedCategoriesImpl>(createPlannerAppliedCategoriesFromDiscriminatorValue); },
            "assignedToTaskBoardFormat": n => { this.assignedToTaskBoardFormat = n.getObjectValue<PlannerAssignedToTaskBoardTaskFormatImpl>(createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue); },
            "assigneePriority": n => { this.assigneePriority = n.getStringValue(); },
            "assignments": n => { this.assignments = n.getObjectValue<PlannerAssignmentsImpl>(createPlannerAssignmentsFromDiscriminatorValue); },
            "bucketId": n => { this.bucketId = n.getStringValue(); },
            "bucketTaskBoardFormat": n => { this.bucketTaskBoardFormat = n.getObjectValue<PlannerBucketTaskBoardTaskFormatImpl>(createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue); },
            "checklistItemCount": n => { this.checklistItemCount = n.getNumberValue(); },
            "completedBy": n => { this.completedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "conversationThreadId": n => { this.conversationThreadId = n.getStringValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "details": n => { this.details = n.getObjectValue<PlannerTaskDetailsImpl>(createPlannerTaskDetailsFromDiscriminatorValue); },
            "dueDateTime": n => { this.dueDateTime = n.getDateValue(); },
            "hasDescription": n => { this.hasDescription = n.getBooleanValue(); },
            "orderHint": n => { this.orderHint = n.getStringValue(); },
            "percentComplete": n => { this.percentComplete = n.getNumberValue(); },
            "planId": n => { this.planId = n.getStringValue(); },
            "previewType": n => { this.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "progressTaskBoardFormat": n => { this.progressTaskBoardFormat = n.getObjectValue<PlannerProgressTaskBoardTaskFormatImpl>(createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue); },
            "referenceCount": n => { this.referenceCount = n.getNumberValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activeChecklistItemCount){
        writer.writeNumberValue("activeChecklistItemCount", this.activeChecklistItemCount);
        }
        if(this.appliedCategories){
        writer.writeObjectValue<PlannerAppliedCategoriesImpl>("appliedCategories", new PlannerAppliedCategoriesImpl(this.appliedCategories));
        }
        if(this.assignedToTaskBoardFormat){
        writer.writeObjectValue<PlannerAssignedToTaskBoardTaskFormatImpl>("assignedToTaskBoardFormat", new PlannerAssignedToTaskBoardTaskFormatImpl(this.assignedToTaskBoardFormat));
        }
        if(this.assigneePriority){
        writer.writeStringValue("assigneePriority", this.assigneePriority);
        }
        if(this.assignments){
        writer.writeObjectValue<PlannerAssignmentsImpl>("assignments", new PlannerAssignmentsImpl(this.assignments));
        }
        if(this.bucketId){
        writer.writeStringValue("bucketId", this.bucketId);
        }
        if(this.bucketTaskBoardFormat){
        writer.writeObjectValue<PlannerBucketTaskBoardTaskFormatImpl>("bucketTaskBoardFormat", new PlannerBucketTaskBoardTaskFormatImpl(this.bucketTaskBoardFormat));
        }
        if(this.checklistItemCount){
        writer.writeNumberValue("checklistItemCount", this.checklistItemCount);
        }
        if(this.completedBy){
        writer.writeObjectValue<IdentitySetImpl>("completedBy", new IdentitySetImpl(this.completedBy));
        }
        if(this.completedDateTime){
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        }
        if(this.conversationThreadId){
        writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        }
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.details){
        writer.writeObjectValue<PlannerTaskDetailsImpl>("details", new PlannerTaskDetailsImpl(this.details));
        }
        if(this.dueDateTime){
        writer.writeDateValue("dueDateTime", this.dueDateTime);
        }
        if(this.hasDescription){
        writer.writeBooleanValue("hasDescription", this.hasDescription);
        }
        if(this.orderHint){
        writer.writeStringValue("orderHint", this.orderHint);
        }
        if(this.percentComplete){
        writer.writeNumberValue("percentComplete", this.percentComplete);
        }
        if(this.planId){
        writer.writeStringValue("planId", this.planId);
        }
        if(this.previewType){
        writer.writeEnumValue<PlannerPreviewType>("previewType", this.previewType);
        }
        if(this.priority){
        writer.writeNumberValue("priority", this.priority);
        }
        if(this.progressTaskBoardFormat){
        writer.writeObjectValue<PlannerProgressTaskBoardTaskFormatImpl>("progressTaskBoardFormat", new PlannerProgressTaskBoardTaskFormatImpl(this.progressTaskBoardFormat));
        }
        if(this.referenceCount){
        writer.writeNumberValue("referenceCount", this.referenceCount);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
    };
}
