import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPlannerAppliedCategoriesFromDiscriminatorValue} from './createPlannerAppliedCategoriesFromDiscriminatorValue';
import {createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerAssignmentsFromDiscriminatorValue} from './createPlannerAssignmentsFromDiscriminatorValue';
import {createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue} from './createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue';
import {createPlannerTaskDetailsFromDiscriminatorValue} from './createPlannerTaskDetailsFromDiscriminatorValue';
import {Entity, IdentitySet, PlannerAppliedCategories, PlannerAssignedToTaskBoardTaskFormat, PlannerAssignments, PlannerBucketTaskBoardTaskFormat, PlannerProgressTaskBoardTaskFormat, PlannerTaskDetails} from './index';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerTask extends Entity implements Parsable {
    /** Number of checklist items with value set to false, representing incomplete items. */
    private _activeChecklistItemCount?: number | undefined;
    /** The categories to which the task has been applied. See applied Categories for possible values. */
    private _appliedCategories?: PlannerAppliedCategories | undefined;
    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo. */
    private _assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    private _assigneePriority?: string | undefined;
    /** The set of assignees the task is assigned to. */
    private _assignments?: PlannerAssignments | undefined;
    /** Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service. */
    private _bucketId?: string | undefined;
    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket. */
    private _bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat | undefined;
    /** Number of checklist items that are present on the task. */
    private _checklistItemCount?: number | undefined;
    /** Identity of the user that completed the task. */
    private _completedBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _completedDateTime?: Date | undefined;
    /** Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group. */
    private _conversationThreadId?: string | undefined;
    /** Identity of the user that created the task. */
    private _createdBy?: IdentitySet | undefined;
    /** Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** Read-only. Nullable. Additional details about the task. */
    private _details?: PlannerTaskDetails | undefined;
    /** Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _dueDateTime?: Date | undefined;
    /** Read-only. Value is true if the details object of the task has a non-empty description and false otherwise. */
    private _hasDescription?: boolean | undefined;
    /** Hint used to order items of this type in a list view. The format is defined as outlined here. */
    private _orderHint?: string | undefined;
    /** Percentage of task completion. When set to 100, the task is considered completed. */
    private _percentComplete?: number | undefined;
    /** Plan ID to which the task belongs. */
    private _planId?: string | undefined;
    /** This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference. */
    private _previewType?: PlannerPreviewType | undefined;
    /** Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority).  Currently, Planner interprets values 0 and 1 as 'urgent', 2 and 3 and 4 as 'important', 5, 6, and 7 as 'medium', and 8, 9, and 10 as 'low'.  Currently, Planner sets the value 1 for 'urgent', 3 for 'important', 5 for 'medium', and 9 for 'low'. */
    private _priority?: number | undefined;
    /** Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress. */
    private _progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat | undefined;
    /** Number of external references that exist on the task. */
    private _referenceCount?: number | undefined;
    /** Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _startDateTime?: Date | undefined;
    /** Title of the task. */
    private _title?: string | undefined;
    /**
     * Gets the activeChecklistItemCount property value. Number of checklist items with value set to false, representing incomplete items.
     * @returns a integer
     */
    public get activeChecklistItemCount() {
        return this._activeChecklistItemCount;
    };
    /**
     * Sets the activeChecklistItemCount property value. Number of checklist items with value set to false, representing incomplete items.
     * @param value Value to set for the activeChecklistItemCount property.
     */
    public set activeChecklistItemCount(value: number | undefined) {
        this._activeChecklistItemCount = value;
    };
    /**
     * Gets the appliedCategories property value. The categories to which the task has been applied. See applied Categories for possible values.
     * @returns a plannerAppliedCategories
     */
    public get appliedCategories() {
        return this._appliedCategories;
    };
    /**
     * Sets the appliedCategories property value. The categories to which the task has been applied. See applied Categories for possible values.
     * @param value Value to set for the appliedCategories property.
     */
    public set appliedCategories(value: PlannerAppliedCategories | undefined) {
        this._appliedCategories = value;
    };
    /**
     * Gets the assignedToTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
     * @returns a plannerAssignedToTaskBoardTaskFormat
     */
    public get assignedToTaskBoardFormat() {
        return this._assignedToTaskBoardFormat;
    };
    /**
     * Sets the assignedToTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
     * @param value Value to set for the assignedToTaskBoardFormat property.
     */
    public set assignedToTaskBoardFormat(value: PlannerAssignedToTaskBoardTaskFormat | undefined) {
        this._assignedToTaskBoardFormat = value;
    };
    /**
     * Gets the assigneePriority property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @returns a string
     */
    public get assigneePriority() {
        return this._assigneePriority;
    };
    /**
     * Sets the assigneePriority property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @param value Value to set for the assigneePriority property.
     */
    public set assigneePriority(value: string | undefined) {
        this._assigneePriority = value;
    };
    /**
     * Gets the assignments property value. The set of assignees the task is assigned to.
     * @returns a plannerAssignments
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The set of assignees the task is assigned to.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: PlannerAssignments | undefined) {
        this._assignments = value;
    };
    /**
     * Gets the bucketId property value. Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service.
     * @returns a string
     */
    public get bucketId() {
        return this._bucketId;
    };
    /**
     * Sets the bucketId property value. Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service.
     * @param value Value to set for the bucketId property.
     */
    public set bucketId(value: string | undefined) {
        this._bucketId = value;
    };
    /**
     * Gets the bucketTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
     * @returns a plannerBucketTaskBoardTaskFormat
     */
    public get bucketTaskBoardFormat() {
        return this._bucketTaskBoardFormat;
    };
    /**
     * Sets the bucketTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
     * @param value Value to set for the bucketTaskBoardFormat property.
     */
    public set bucketTaskBoardFormat(value: PlannerBucketTaskBoardTaskFormat | undefined) {
        this._bucketTaskBoardFormat = value;
    };
    /**
     * Gets the checklistItemCount property value. Number of checklist items that are present on the task.
     * @returns a integer
     */
    public get checklistItemCount() {
        return this._checklistItemCount;
    };
    /**
     * Sets the checklistItemCount property value. Number of checklist items that are present on the task.
     * @param value Value to set for the checklistItemCount property.
     */
    public set checklistItemCount(value: number | undefined) {
        this._checklistItemCount = value;
    };
    /**
     * Gets the completedBy property value. Identity of the user that completed the task.
     * @returns a identitySet
     */
    public get completedBy() {
        return this._completedBy;
    };
    /**
     * Sets the completedBy property value. Identity of the user that completed the task.
     * @param value Value to set for the completedBy property.
     */
    public set completedBy(value: IdentitySet | undefined) {
        this._completedBy = value;
    };
    /**
     * Gets the completedDateTime property value. Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: Date | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Instantiates a new plannerTask and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationThreadId property value. Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
     * @returns a string
     */
    public get conversationThreadId() {
        return this._conversationThreadId;
    };
    /**
     * Sets the conversationThreadId property value. Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
     * @param value Value to set for the conversationThreadId property.
     */
    public set conversationThreadId(value: string | undefined) {
        this._conversationThreadId = value;
    };
    /**
     * Gets the createdBy property value. Identity of the user that created the task.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Identity of the user that created the task.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the details property value. Read-only. Nullable. Additional details about the task.
     * @returns a plannerTaskDetails
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. Read-only. Nullable. Additional details about the task.
     * @param value Value to set for the details property.
     */
    public set details(value: PlannerTaskDetails | undefined) {
        this._details = value;
    };
    /**
     * Gets the dueDateTime property value. Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Sets the dueDateTime property value. Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: Date | undefined) {
        this._dueDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeChecklistItemCount": n => { this.activeChecklistItemCount = n.getNumberValue(); },
            "appliedCategories": n => { this.appliedCategories = n.getObjectValue<PlannerAppliedCategories>(createPlannerAppliedCategoriesFromDiscriminatorValue); },
            "assignedToTaskBoardFormat": n => { this.assignedToTaskBoardFormat = n.getObjectValue<PlannerAssignedToTaskBoardTaskFormat>(createPlannerAssignedToTaskBoardTaskFormatFromDiscriminatorValue); },
            "assigneePriority": n => { this.assigneePriority = n.getStringValue(); },
            "assignments": n => { this.assignments = n.getObjectValue<PlannerAssignments>(createPlannerAssignmentsFromDiscriminatorValue); },
            "bucketId": n => { this.bucketId = n.getStringValue(); },
            "bucketTaskBoardFormat": n => { this.bucketTaskBoardFormat = n.getObjectValue<PlannerBucketTaskBoardTaskFormat>(createPlannerBucketTaskBoardTaskFormatFromDiscriminatorValue); },
            "checklistItemCount": n => { this.checklistItemCount = n.getNumberValue(); },
            "completedBy": n => { this.completedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getDateValue(); },
            "conversationThreadId": n => { this.conversationThreadId = n.getStringValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "details": n => { this.details = n.getObjectValue<PlannerTaskDetails>(createPlannerTaskDetailsFromDiscriminatorValue); },
            "dueDateTime": n => { this.dueDateTime = n.getDateValue(); },
            "hasDescription": n => { this.hasDescription = n.getBooleanValue(); },
            "orderHint": n => { this.orderHint = n.getStringValue(); },
            "percentComplete": n => { this.percentComplete = n.getNumberValue(); },
            "planId": n => { this.planId = n.getStringValue(); },
            "previewType": n => { this.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "progressTaskBoardFormat": n => { this.progressTaskBoardFormat = n.getObjectValue<PlannerProgressTaskBoardTaskFormat>(createPlannerProgressTaskBoardTaskFormatFromDiscriminatorValue); },
            "referenceCount": n => { this.referenceCount = n.getNumberValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the hasDescription property value. Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
     * @returns a boolean
     */
    public get hasDescription() {
        return this._hasDescription;
    };
    /**
     * Sets the hasDescription property value. Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
     * @param value Value to set for the hasDescription property.
     */
    public set hasDescription(value: boolean | undefined) {
        this._hasDescription = value;
    };
    /**
     * Gets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * Sets the orderHint property value. Hint used to order items of this type in a list view. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        this._orderHint = value;
    };
    /**
     * Gets the percentComplete property value. Percentage of task completion. When set to 100, the task is considered completed.
     * @returns a integer
     */
    public get percentComplete() {
        return this._percentComplete;
    };
    /**
     * Sets the percentComplete property value. Percentage of task completion. When set to 100, the task is considered completed.
     * @param value Value to set for the percentComplete property.
     */
    public set percentComplete(value: number | undefined) {
        this._percentComplete = value;
    };
    /**
     * Gets the planId property value. Plan ID to which the task belongs.
     * @returns a string
     */
    public get planId() {
        return this._planId;
    };
    /**
     * Sets the planId property value. Plan ID to which the task belongs.
     * @param value Value to set for the planId property.
     */
    public set planId(value: string | undefined) {
        this._planId = value;
    };
    /**
     * Gets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference.
     * @returns a plannerPreviewType
     */
    public get previewType() {
        return this._previewType;
    };
    /**
     * Sets the previewType property value. This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist, description, reference.
     * @param value Value to set for the previewType property.
     */
    public set previewType(value: PlannerPreviewType | undefined) {
        this._previewType = value;
    };
    /**
     * Gets the priority property value. Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority).  Currently, Planner interprets values 0 and 1 as 'urgent', 2 and 3 and 4 as 'important', 5, 6, and 7 as 'medium', and 8, 9, and 10 as 'low'.  Currently, Planner sets the value 1 for 'urgent', 3 for 'important', 5 for 'medium', and 9 for 'low'.
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. Priority of the task. Valid range of values is between 0 and 10 (inclusive), with increasing value being lower priority (0 has the highest priority and 10 has the lowest priority).  Currently, Planner interprets values 0 and 1 as 'urgent', 2 and 3 and 4 as 'important', 5, 6, and 7 as 'medium', and 8, 9, and 10 as 'low'.  Currently, Planner sets the value 1 for 'urgent', 3 for 'important', 5 for 'medium', and 9 for 'low'.
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Gets the progressTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
     * @returns a plannerProgressTaskBoardTaskFormat
     */
    public get progressTaskBoardFormat() {
        return this._progressTaskBoardFormat;
    };
    /**
     * Sets the progressTaskBoardFormat property value. Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
     * @param value Value to set for the progressTaskBoardFormat property.
     */
    public set progressTaskBoardFormat(value: PlannerProgressTaskBoardTaskFormat | undefined) {
        this._progressTaskBoardFormat = value;
    };
    /**
     * Gets the referenceCount property value. Number of external references that exist on the task.
     * @returns a integer
     */
    public get referenceCount() {
        return this._referenceCount;
    };
    /**
     * Sets the referenceCount property value. Number of external references that exist on the task.
     * @param value Value to set for the referenceCount property.
     */
    public set referenceCount(value: number | undefined) {
        this._referenceCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("activeChecklistItemCount", this.activeChecklistItemCount);
        writer.writeObjectValue<PlannerAppliedCategories>("appliedCategories", this.appliedCategories);
        writer.writeObjectValue<PlannerAssignedToTaskBoardTaskFormat>("assignedToTaskBoardFormat", this.assignedToTaskBoardFormat);
        writer.writeStringValue("assigneePriority", this.assigneePriority);
        writer.writeObjectValue<PlannerAssignments>("assignments", this.assignments);
        writer.writeStringValue("bucketId", this.bucketId);
        writer.writeObjectValue<PlannerBucketTaskBoardTaskFormat>("bucketTaskBoardFormat", this.bucketTaskBoardFormat);
        writer.writeNumberValue("checklistItemCount", this.checklistItemCount);
        writer.writeObjectValue<IdentitySet>("completedBy", this.completedBy);
        writer.writeDateValue("completedDateTime", this.completedDateTime);
        writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<PlannerTaskDetails>("details", this.details);
        writer.writeDateValue("dueDateTime", this.dueDateTime);
        writer.writeBooleanValue("hasDescription", this.hasDescription);
        writer.writeStringValue("orderHint", this.orderHint);
        writer.writeNumberValue("percentComplete", this.percentComplete);
        writer.writeStringValue("planId", this.planId);
        writer.writeEnumValue<PlannerPreviewType>("previewType", this.previewType);
        writer.writeNumberValue("priority", this.priority);
        writer.writeObjectValue<PlannerProgressTaskBoardTaskFormat>("progressTaskBoardFormat", this.progressTaskBoardFormat);
        writer.writeNumberValue("referenceCount", this.referenceCount);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the startDateTime property value. Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the title property value. Title of the task.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Title of the task.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
