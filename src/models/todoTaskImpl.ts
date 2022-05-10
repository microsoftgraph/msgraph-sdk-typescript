import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createLinkedResourceFromDiscriminatorValue} from './createLinkedResourceFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Extension} from './extension';
import {Importance} from './importance';
import {DateTimeTimeZoneImpl, EntityImpl, ExtensionImpl, ItemBodyImpl, LinkedResourceImpl, PatternedRecurrenceImpl} from './index';
import {ItemBody} from './itemBody';
import {LinkedResource} from './linkedResource';
import {PatternedRecurrence} from './patternedRecurrence';
import {TaskStatus} from './taskStatus';
import {TodoTask} from './todoTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TodoTaskImpl extends EntityImpl implements Parsable, TodoTask {
    /** The task body that typically contains information about the task.  */
    body?: ItemBody | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.  */
    bodyLastModifiedDateTime?: Date | undefined;
    /** The date in the specified time zone that the task was finished.  */
    completedDateTime?: DateTimeTimeZone | undefined;
    /** The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.  */
    createdDateTime?: Date | undefined;
    /** The date in the specified time zone that the task is to be finished.  */
    dueDateTime?: DateTimeTimeZone | undefined;
    /** The collection of open extensions defined for the task. Nullable.  */
    extensions?: Extension[] | undefined;
    /** The importance of the task. Possible values are: low, normal, high.  */
    importance?: Importance | undefined;
    /** Set to true if an alert is set to remind the user of the task.  */
    isReminderOn?: boolean | undefined;
    /** The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.  */
    lastModifiedDateTime?: Date | undefined;
    /** A collection of resources linked to the task.  */
    linkedResources?: LinkedResource[] | undefined;
    /** The recurrence pattern for the task.  */
    recurrence?: PatternedRecurrence | undefined;
    /** The date and time for a reminder alert of the task to occur.  */
    reminderDateTime?: DateTimeTimeZone | undefined;
    /** Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers, deferred.  */
    status?: TaskStatus | undefined;
    /** A brief description of the task.  */
    title?: string | undefined;
    /**
     * Instantiates a new todoTask and sets the default values.
     * @param todoTaskParameterValue 
     */
    public constructor(todoTaskParameterValue?: TodoTask | undefined) {
        super();
        this.body = todoTaskParameterValue?.body ;
        this.bodyLastModifiedDateTime = todoTaskParameterValue?.bodyLastModifiedDateTime ;
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
        if(this.body)
        writer.writeObjectValue<ItemBodyImpl>("body", new ItemBodyImpl(this.body));
        }
        if(this.bodyLastModifiedDateTime){
        if(this.bodyLastModifiedDateTime)
        writer.writeDateValue("bodyLastModifiedDateTime", this.bodyLastModifiedDateTime);
        }
        if(this.completedDateTime){
        if(this.completedDateTime)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("completedDateTime", new DateTimeTimeZoneImpl(this.completedDateTime));
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.dueDateTime){
        if(this.dueDateTime)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("dueDateTime", new DateTimeTimeZoneImpl(this.dueDateTime));
        }
        if(this.extensions){
        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.importance){
        if(this.importance)
        writer.writeEnumValue<Importance>("importance", this.importance);
        }
        if(this.isReminderOn){
        if(this.isReminderOn)
        writer.writeBooleanValue("isReminderOn", this.isReminderOn);
        }
        if(this.lastModifiedDateTime){
        if(this.lastModifiedDateTime)
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.linkedResources){
        const linkedResourcesArrValue: LinkedResourceImpl[] = []; this.linkedResources?.forEach(element => {linkedResourcesArrValue.push(new LinkedResourceImpl(element));});
        writer.writeCollectionOfObjectValues<LinkedResourceImpl>("linkedResources", linkedResourcesArrValue);
        }
        if(this.recurrence){
        if(this.recurrence)
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.reminderDateTime){
        if(this.reminderDateTime)
        writer.writeObjectValue<DateTimeTimeZoneImpl>("reminderDateTime", new DateTimeTimeZoneImpl(this.reminderDateTime));
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<TaskStatus>("status", this.status);
        }
        if(this.title){
        if(this.title)
        writer.writeStringValue("title", this.title);
        }
    };
}
