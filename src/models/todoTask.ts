import {createAttachmentBaseFromDiscriminatorValue} from './createAttachmentBaseFromDiscriminatorValue';
import {createAttachmentSessionFromDiscriminatorValue} from './createAttachmentSessionFromDiscriminatorValue';
import {createChecklistItemFromDiscriminatorValue} from './createChecklistItemFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createLinkedResourceFromDiscriminatorValue} from './createLinkedResourceFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {Importance} from './importance';
import {AttachmentBase, AttachmentSession, ChecklistItem, DateTimeTimeZone, Entity, Extension, ItemBody, LinkedResource, PatternedRecurrence} from './index';
import {TaskStatus} from './taskStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreement entities.
 */
export class TodoTask extends Entity implements Parsable {
    /** The attachments property */
    private _attachments?: AttachmentBase[] | undefined;
    /** The attachmentSessions property */
    private _attachmentSessions?: AttachmentSession[] | undefined;
    /** The task body that typically contains information about the task. */
    private _body?: ItemBody | undefined;
    /** The date and time when the task body was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    private _bodyLastModifiedDateTime?: Date | undefined;
    /** The categories associated with the task. Each category corresponds to the displayName property of an outlookCategory that the user has defined. */
    private _categories?: string[] | undefined;
    /** A collection of checklistItems linked to a task. */
    private _checklistItems?: ChecklistItem[] | undefined;
    /** The date and time in the specified time zone that the task was finished. */
    private _completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    private _createdDateTime?: Date | undefined;
    /** The date and time in the specified time zone that the task is to be finished. */
    private _dueDateTime?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the task. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** The hasAttachments property */
    private _hasAttachments?: boolean | undefined;
    /** The importance property */
    private _importance?: Importance | undefined;
    /** Set to true if an alert is set to remind the user of the task. */
    private _isReminderOn?: boolean | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    private _lastModifiedDateTime?: Date | undefined;
    /** A collection of resources linked to the task. */
    private _linkedResources?: LinkedResource[] | undefined;
    /** The recurrence pattern for the task. */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The date and time in the specified time zone for a reminder alert of the task to occur. */
    private _reminderDateTime?: DateTimeTimeZone | undefined;
    /** The startDateTime property */
    private _startDateTime?: DateTimeTimeZone | undefined;
    /** The status property */
    private _status?: TaskStatus | undefined;
    /** A brief description of the task. */
    private _title?: string | undefined;
    /**
     * Gets the attachments property value. The attachments property
     * @returns a attachmentBase
     */
    public get attachments() {
        return this._attachments;
    };
    /**
     * Sets the attachments property value. The attachments property
     * @param value Value to set for the attachments property.
     */
    public set attachments(value: AttachmentBase[] | undefined) {
        this._attachments = value;
    };
    /**
     * Gets the attachmentSessions property value. The attachmentSessions property
     * @returns a attachmentSession
     */
    public get attachmentSessions() {
        return this._attachmentSessions;
    };
    /**
     * Sets the attachmentSessions property value. The attachmentSessions property
     * @param value Value to set for the attachmentSessions property.
     */
    public set attachmentSessions(value: AttachmentSession[] | undefined) {
        this._attachmentSessions = value;
    };
    /**
     * Gets the body property value. The task body that typically contains information about the task.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The task body that typically contains information about the task.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Gets the bodyLastModifiedDateTime property value. The date and time when the task body was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get bodyLastModifiedDateTime() {
        return this._bodyLastModifiedDateTime;
    };
    /**
     * Sets the bodyLastModifiedDateTime property value. The date and time when the task body was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the bodyLastModifiedDateTime property.
     */
    public set bodyLastModifiedDateTime(value: Date | undefined) {
        this._bodyLastModifiedDateTime = value;
    };
    /**
     * Gets the categories property value. The categories associated with the task. Each category corresponds to the displayName property of an outlookCategory that the user has defined.
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. The categories associated with the task. Each category corresponds to the displayName property of an outlookCategory that the user has defined.
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Gets the checklistItems property value. A collection of checklistItems linked to a task.
     * @returns a checklistItem
     */
    public get checklistItems() {
        return this._checklistItems;
    };
    /**
     * Sets the checklistItems property value. A collection of checklistItems linked to a task.
     * @param value Value to set for the checklistItems property.
     */
    public set checklistItems(value: ChecklistItem[] | undefined) {
        this._checklistItems = value;
    };
    /**
     * Gets the completedDateTime property value. The date and time in the specified time zone that the task was finished.
     * @returns a dateTimeTimeZone
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The date and time in the specified time zone that the task was finished.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: DateTimeTimeZone | undefined) {
        this._completedDateTime = value;
    };
    /**
     * Instantiates a new todoTask and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the dueDateTime property value. The date and time in the specified time zone that the task is to be finished.
     * @returns a dateTimeTimeZone
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Sets the dueDateTime property value. The date and time in the specified time zone that the task is to be finished.
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: DateTimeTimeZone | undefined) {
        this._dueDateTime = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the task. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the task. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attachments": n => { this.attachments = n.getCollectionOfObjectValues<AttachmentBase>(createAttachmentBaseFromDiscriminatorValue); },
            "attachmentSessions": n => { this.attachmentSessions = n.getCollectionOfObjectValues<AttachmentSession>(createAttachmentSessionFromDiscriminatorValue); },
            "body": n => { this.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "bodyLastModifiedDateTime": n => { this.bodyLastModifiedDateTime = n.getDateValue(); },
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "checklistItems": n => { this.checklistItems = n.getCollectionOfObjectValues<ChecklistItem>(createChecklistItemFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "dueDateTime": n => { this.dueDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
            "hasAttachments": n => { this.hasAttachments = n.getBooleanValue(); },
            "importance": n => { this.importance = n.getEnumValue<Importance>(Importance); },
            "isReminderOn": n => { this.isReminderOn = n.getBooleanValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "linkedResources": n => { this.linkedResources = n.getCollectionOfObjectValues<LinkedResource>(createLinkedResourceFromDiscriminatorValue); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderDateTime": n => { this.reminderDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<TaskStatus>(TaskStatus); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the hasAttachments property value. The hasAttachments property
     * @returns a boolean
     */
    public get hasAttachments() {
        return this._hasAttachments;
    };
    /**
     * Sets the hasAttachments property value. The hasAttachments property
     * @param value Value to set for the hasAttachments property.
     */
    public set hasAttachments(value: boolean | undefined) {
        this._hasAttachments = value;
    };
    /**
     * Gets the importance property value. The importance property
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance property
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        this._importance = value;
    };
    /**
     * Gets the isReminderOn property value. Set to true if an alert is set to remind the user of the task.
     * @returns a boolean
     */
    public get isReminderOn() {
        return this._isReminderOn;
    };
    /**
     * Sets the isReminderOn property value. Set to true if an alert is set to remind the user of the task.
     * @param value Value to set for the isReminderOn property.
     */
    public set isReminderOn(value: boolean | undefined) {
        this._isReminderOn = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the linkedResources property value. A collection of resources linked to the task.
     * @returns a linkedResource
     */
    public get linkedResources() {
        return this._linkedResources;
    };
    /**
     * Sets the linkedResources property value. A collection of resources linked to the task.
     * @param value Value to set for the linkedResources property.
     */
    public set linkedResources(value: LinkedResource[] | undefined) {
        this._linkedResources = value;
    };
    /**
     * Gets the recurrence property value. The recurrence pattern for the task.
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence pattern for the task.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        this._recurrence = value;
    };
    /**
     * Gets the reminderDateTime property value. The date and time in the specified time zone for a reminder alert of the task to occur.
     * @returns a dateTimeTimeZone
     */
    public get reminderDateTime() {
        return this._reminderDateTime;
    };
    /**
     * Sets the reminderDateTime property value. The date and time in the specified time zone for a reminder alert of the task to occur.
     * @param value Value to set for the reminderDateTime property.
     */
    public set reminderDateTime(value: DateTimeTimeZone | undefined) {
        this._reminderDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AttachmentBase>("attachments", this.attachments);
        writer.writeCollectionOfObjectValues<AttachmentSession>("attachmentSessions", this.attachmentSessions);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeDateValue("bodyLastModifiedDateTime", this.bodyLastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeCollectionOfObjectValues<ChecklistItem>("checklistItems", this.checklistItems);
        writer.writeObjectValue<DateTimeTimeZone>("completedDateTime", this.completedDateTime);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", this.dueDateTime);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeEnumValue<Importance>("importance", this.importance);
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<LinkedResource>("linkedResources", this.linkedResources);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeObjectValue<DateTimeTimeZone>("reminderDateTime", this.reminderDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
        writer.writeEnumValue<TaskStatus>("status", this.status);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a taskStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: TaskStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the title property value. A brief description of the task.
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. A brief description of the task.
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
