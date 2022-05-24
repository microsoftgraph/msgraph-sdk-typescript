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

/** Casts the previous resource to user. */
export class TodoTaskImpl extends EntityImpl implements Parsable, TodoTask {
    /** The task body that typically contains information about the task. */
    public body?: ItemBody | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    public bodyLastModifiedDateTime?: Date | undefined;
    /** The categories property */
    public categories?: string[] | undefined;
    /** The checklistItems property */
    public checklistItems?: ChecklistItem[] | undefined;
    /** The date in the specified time zone that the task was finished. */
    public completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    public createdDateTime?: Date | undefined;
    /** The date in the specified time zone that the task is to be finished. */
    public dueDateTime?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the task. Nullable. */
    public extensions?: Extension[] | undefined;
    /** The importance of the task. Possible values are: low, normal, high. */
    public importance?: Importance | undefined;
    /** Set to true if an alert is set to remind the user of the task. */
    public isReminderOn?: boolean | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'. */
    public lastModifiedDateTime?: Date | undefined;
    /** A collection of resources linked to the task. */
    public linkedResources?: LinkedResource[] | undefined;
    /** The recurrence pattern for the task. */
    public recurrence?: PatternedRecurrence | undefined;
    /** The date and time for a reminder alert of the task to occur. */
    public reminderDateTime?: DateTimeTimeZone | undefined;
    /** Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred. */
    public status?: TaskStatus | undefined;
    /** A brief description of the task. */
    public title?: string | undefined;
    /**
     * Instantiates a new todoTask and sets the default values.
     * @param todoTaskParameterValue 
     */
    public constructor(todoTaskParameterValue?: TodoTask | undefined) {
        super();
        this.body = todoTaskParameterValue?.body ;
        this.bodyLastModifiedDateTime = todoTaskParameterValue?.bodyLastModifiedDateTime ;
        this.categories = todoTaskParameterValue?.categories ;
        this.checklistItems = todoTaskParameterValue?.checklistItems ;
        this.completedDateTime = todoTaskParameterValue?.completedDateTime ;
        this.createdDateTime = todoTaskParameterValue?.createdDateTime ;
        this.dueDateTime = todoTaskParameterValue?.dueDateTime ;
        this.extensions = todoTaskParameterValue?.extensions ;
        this.importance = todoTaskParameterValue?.importance ;
        this.isReminderOn = todoTaskParameterValue?.isReminderOn ;
        this.lastModifiedDateTime = todoTaskParameterValue?.lastModifiedDateTime ;
        this.linkedResources = todoTaskParameterValue?.linkedResources ;
        this.recurrence = todoTaskParameterValue?.recurrence ;
        this.reminderDateTime = todoTaskParameterValue?.reminderDateTime ;
        this.status = todoTaskParameterValue?.status ;
        this.title = todoTaskParameterValue?.title ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.body){
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.bodyLastModifiedDateTime){
        writer.writeDateValue("bodyLastModifiedDateTime", this.bodyLastModifiedDateTime);
        }
        if(this.categories){
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        }
        if(this.checklistItems && this.checklistItems.length != 0){        const checklistItemsArrValue: ChecklistItemImpl[] = []; this.checklistItems?.forEach(element => {checklistItemsArrValue.push(new ChecklistItemImpl(element));});
        writer.writeCollectionOfObjectValues<ChecklistItemImpl>("checklistItems", checklistItemsArrValue);
        }
        if(this.completedDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("completedDateTime", new DateTimeTimeZoneImpl(this.completedDateTime));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.dueDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("dueDateTime", new DateTimeTimeZoneImpl(this.dueDateTime));
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
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
        if(this.linkedResources && this.linkedResources.length != 0){        const linkedResourcesArrValue: LinkedResourceImpl[] = []; this.linkedResources?.forEach(element => {linkedResourcesArrValue.push(new LinkedResourceImpl(element));});
        writer.writeCollectionOfObjectValues<LinkedResourceImpl>("linkedResources", linkedResourcesArrValue);
        }
        if(this.recurrence){
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.reminderDateTime){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("reminderDateTime", new DateTimeTimeZoneImpl(this.reminderDateTime));
        }
        if(this.status){
        writer.writeEnumValue<TaskStatus>("status", this.status);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
    };
}
