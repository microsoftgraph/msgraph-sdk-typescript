import {ChecklistItem} from './checklistItem';
import {createChecklistItemFromDiscriminatorValue} from './createChecklistItemFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createLinkedResourceFromDiscriminatorValue} from './createLinkedResourceFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Extension} from './extension';
import {Importance} from './importance';
import {ChecklistItemImpl, DateTimeTimeZoneImpl, EntityImpl, ExtensionImpl, ItemBodyImpl, LinkedResourceImpl, PatternedRecurrenceImpl} from './index';
import {ItemBody} from './itemBody';
import {LinkedResource} from './linkedResource';
import {PatternedRecurrence} from './patternedRecurrence';
import {TaskStatus} from './taskStatus';
import {TodoTask} from './todoTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class TodoTaskImpl extends EntityImpl implements TodoTask {
    /** The task body that typically contains information about the task. */
    private _body?: ItemBody | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    private _bodyLastModifiedDateTime?: Date | undefined;
    /** The categories associated with the task. Each category corresponds to the displayName property of an outlookCategory that the user has defined. */
    private _categories?: string[] | undefined;
    /** A collection of smaller subtasks linked to the more complex parent task. */
    private _checklistItems?: ChecklistItem[] | undefined;
    /** The date in the specified time zone that the task was finished. */
    private _completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    private _createdDateTime?: Date | undefined;
    /** The date in the specified time zone that the task is to be finished. */
    private _dueDateTime?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the task. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** The importance of the task. Possible values are: low, normal, high. */
    private _importance?: Importance | undefined;
    /** Set to true if an alert is set to remind the user of the task. */
    private _isReminderOn?: boolean | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    private _lastModifiedDateTime?: Date | undefined;
    /** A collection of resources linked to the task. */
    private _linkedResources?: LinkedResource[] | undefined;
    /** The recurrence pattern for the task. */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The date and time for a reminder alert of the task to occur. */
    private _reminderDateTime?: DateTimeTimeZone | undefined;
    /** Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred. */
    private _status?: TaskStatus | undefined;
    /** A brief description of the task. */
    private _title?: string | undefined;
    /**
     * Gets the body property value. The task body that typically contains information about the task.
     * @returns a ItemBodyInterface
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. The task body that typically contains information about the task.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        if(value) {
            this._body = value instanceof ItemBodyImpl? value as ItemBodyImpl: new ItemBodyImpl(value);
        }
    };
    /**
     * Gets the bodyLastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get bodyLastModifiedDateTime() {
        return this._bodyLastModifiedDateTime;
    };
    /**
     * Sets the bodyLastModifiedDateTime property value. The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     * @param value Value to set for the bodyLastModifiedDateTime property.
     */
    public set bodyLastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._bodyLastModifiedDateTime = value;
        }
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
        if(value) {
            this._categories = value;
        }
    };
    /**
     * Gets the checklistItems property value. A collection of smaller subtasks linked to the more complex parent task.
     * @returns a ChecklistItemInterface
     */
    public get checklistItems() {
        return this._checklistItems;
    };
    /**
     * Sets the checklistItems property value. A collection of smaller subtasks linked to the more complex parent task.
     * @param value Value to set for the checklistItems property.
     */
    public set checklistItems(value: ChecklistItem[] | undefined) {
        if(value) {
            const checklistItemsArrValue: ChecklistItemImpl[] = [];
            this.checklistItems?.forEach(element => {
                checklistItemsArrValue.push((element instanceof ChecklistItemImpl? element as ChecklistItemImpl:new ChecklistItemImpl(element)));
            });
            this._checklistItems = checklistItemsArrValue;
        }
    };
    /**
     * Gets the completedDateTime property value. The date in the specified time zone that the task was finished.
     * @returns a DateTimeTimeZoneInterface
     */
    public get completedDateTime() {
        return this._completedDateTime;
    };
    /**
     * Sets the completedDateTime property value. The date in the specified time zone that the task was finished.
     * @param value Value to set for the completedDateTime property.
     */
    public set completedDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._completedDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Instantiates a new todoTask and sets the default values.
     * @param todoTaskParameterValue 
     */
    public constructor(todoTaskParameterValue?: TodoTask | undefined) {
        super(todoTaskParameterValue);
        this._body = todoTaskParameterValue?.body;
        this._bodyLastModifiedDateTime = todoTaskParameterValue?.bodyLastModifiedDateTime;
        this._categories = todoTaskParameterValue?.categories;
        this._checklistItems = todoTaskParameterValue?.checklistItems;
        this._completedDateTime = todoTaskParameterValue?.completedDateTime;
        this._createdDateTime = todoTaskParameterValue?.createdDateTime;
        this._dueDateTime = todoTaskParameterValue?.dueDateTime;
        this._extensions = todoTaskParameterValue?.extensions;
        this._importance = todoTaskParameterValue?.importance;
        this._isReminderOn = todoTaskParameterValue?.isReminderOn;
        this._lastModifiedDateTime = todoTaskParameterValue?.lastModifiedDateTime;
        this._linkedResources = todoTaskParameterValue?.linkedResources;
        this._recurrence = todoTaskParameterValue?.recurrence;
        this._reminderDateTime = todoTaskParameterValue?.reminderDateTime;
        this._status = todoTaskParameterValue?.status;
        this._title = todoTaskParameterValue?.title;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the dueDateTime property value. The date in the specified time zone that the task is to be finished.
     * @returns a DateTimeTimeZoneInterface
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Sets the dueDateTime property value. The date in the specified time zone that the task is to be finished.
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._dueDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the task. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the task. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element as ExtensionImpl:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "body": n => { this.body = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "bodyLastModifiedDateTime": n => { this.bodyLastModifiedDateTime = n.getDateValue(); },
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "checklistItems": n => { this.checklistItems = n.getCollectionOfObjectValues<ChecklistItemImpl>(createChecklistItemFromDiscriminatorValue); },
            "completedDateTime": n => { this.completedDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "dueDateTime": n => { this.dueDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "importance": n => { this.importance = n.getEnumValue<Importance>(Importance); },
            "isReminderOn": n => { this.isReminderOn = n.getBooleanValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "linkedResources": n => { this.linkedResources = n.getCollectionOfObjectValues<LinkedResourceImpl>(createLinkedResourceFromDiscriminatorValue); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "reminderDateTime": n => { this.reminderDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<TaskStatus>(TaskStatus); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the importance property value. The importance of the task. Possible values are: low, normal, high.
     * @returns a importance
     */
    public get importance() {
        return this._importance;
    };
    /**
     * Sets the importance property value. The importance of the task. Possible values are: low, normal, high.
     * @param value Value to set for the importance property.
     */
    public set importance(value: Importance | undefined) {
        if(value) {
            this._importance = value;
        }
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
        if(value) {
            this._isReminderOn = value;
        }
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
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the linkedResources property value. A collection of resources linked to the task.
     * @returns a LinkedResourceInterface
     */
    public get linkedResources() {
        return this._linkedResources;
    };
    /**
     * Sets the linkedResources property value. A collection of resources linked to the task.
     * @param value Value to set for the linkedResources property.
     */
    public set linkedResources(value: LinkedResource[] | undefined) {
        if(value) {
            const linkedResourcesArrValue: LinkedResourceImpl[] = [];
            this.linkedResources?.forEach(element => {
                linkedResourcesArrValue.push((element instanceof LinkedResourceImpl? element as LinkedResourceImpl:new LinkedResourceImpl(element)));
            });
            this._linkedResources = linkedResourcesArrValue;
        }
    };
    /**
     * Gets the recurrence property value. The recurrence pattern for the task.
     * @returns a PatternedRecurrenceInterface
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence pattern for the task.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        if(value) {
            this._recurrence = value instanceof PatternedRecurrenceImpl? value as PatternedRecurrenceImpl: new PatternedRecurrenceImpl(value);
        }
    };
    /**
     * Gets the reminderDateTime property value. The date and time for a reminder alert of the task to occur.
     * @returns a DateTimeTimeZoneInterface
     */
    public get reminderDateTime() {
        return this._reminderDateTime;
    };
    /**
     * Sets the reminderDateTime property value. The date and time for a reminder alert of the task to occur.
     * @param value Value to set for the reminderDateTime property.
     */
    public set reminderDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._reminderDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.body){
            writer.writeObjectValue<ItemBodyImpl>("body", (this.body instanceof ItemBodyImpl? this.body as ItemBodyImpl: new ItemBodyImpl(this.body)));
        }
        if(this.bodyLastModifiedDateTime){
            writer.writeDateValue("bodyLastModifiedDateTime", this.bodyLastModifiedDateTime);
        }
        if(this.categories){
            writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        }
        if(this.checklistItems && this.checklistItems.length != 0){        const checklistItemsArrValue: ChecklistItemImpl[] = [];
        this.checklistItems?.forEach(element => {
            checklistItemsArrValue.push((element instanceof ChecklistItemImpl? element as ChecklistItemImpl:new ChecklistItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChecklistItemImpl>("checklistItems", checklistItemsArrValue);
        }
        if(this.completedDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("completedDateTime", (this.completedDateTime instanceof DateTimeTimeZoneImpl? this.completedDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.completedDateTime)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.dueDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("dueDateTime", (this.dueDateTime instanceof DateTimeTimeZoneImpl? this.dueDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.dueDateTime)));
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element as ExtensionImpl:new ExtensionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.importance){
            writer.writeEnumValue<Importance>("importance", this.importance);
        }
        if(this.isReminderOn){
            writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.linkedResources && this.linkedResources.length != 0){        const linkedResourcesArrValue: LinkedResourceImpl[] = [];
        this.linkedResources?.forEach(element => {
            linkedResourcesArrValue.push((element instanceof LinkedResourceImpl? element as LinkedResourceImpl:new LinkedResourceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<LinkedResourceImpl>("linkedResources", linkedResourcesArrValue);
        }
        if(this.recurrence){
            writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", (this.recurrence instanceof PatternedRecurrenceImpl? this.recurrence as PatternedRecurrenceImpl: new PatternedRecurrenceImpl(this.recurrence)));
        }
        if(this.reminderDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("reminderDateTime", (this.reminderDateTime instanceof DateTimeTimeZoneImpl? this.reminderDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.reminderDateTime)));
        }
        if(this.status){
            writer.writeEnumValue<TaskStatus>("status", this.status);
        }
        if(this.title){
            writer.writeStringValue("title", this.title);
        }
    };
    /**
     * Gets the status property value. Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.
     * @returns a taskStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.
     * @param value Value to set for the status property.
     */
    public set status(value: TaskStatus | undefined) {
        if(value) {
            this._status = value;
        }
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
        if(value) {
            this._title = value;
        }
    };
}
