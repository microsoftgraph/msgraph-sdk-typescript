import {AttachmentBase} from './attachmentBase';
import {AttachmentSession} from './attachmentSession';
import {ChecklistItem} from './checklistItem';
import {createAttachmentBaseFromDiscriminatorValue} from './createAttachmentBaseFromDiscriminatorValue';
import {createAttachmentSessionFromDiscriminatorValue} from './createAttachmentSessionFromDiscriminatorValue';
import {createChecklistItemFromDiscriminatorValue} from './createChecklistItemFromDiscriminatorValue';
import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createLinkedResourceFromDiscriminatorValue} from './createLinkedResourceFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Extension} from './extension';
import {Importance} from './importance';
import {ItemBody} from './itemBody';
import {LinkedResource} from './linkedResource';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {serializeChecklistItem} from './serializeChecklistItem';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeLinkedResource} from './serializeLinkedResource';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {TaskStatus} from './taskStatus';
import {TodoTask} from './todoTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTask(todoTask: TodoTask | undefined = {} as TodoTask) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todoTask),
        "attachments": n => { todoTask.attachments = n.getCollectionOfObjectValues<AttachmentBase>(createAttachmentBaseFromDiscriminatorValue); },
        "attachmentSessions": n => { todoTask.attachmentSessions = n.getCollectionOfObjectValues<AttachmentSession>(createAttachmentSessionFromDiscriminatorValue); },
        "body": n => { todoTask.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "bodyLastModifiedDateTime": n => { todoTask.bodyLastModifiedDateTime = n.getDateValue(); },
        "categories": n => { todoTask.categories = n.getCollectionOfPrimitiveValues<string>(); },
        "checklistItems": n => { todoTask.checklistItems = n.getCollectionOfObjectValues<ChecklistItem>(createChecklistItemFromDiscriminatorValue); },
        "completedDateTime": n => { todoTask.completedDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "createdDateTime": n => { todoTask.createdDateTime = n.getDateValue(); },
        "dueDateTime": n => { todoTask.dueDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "extensions": n => { todoTask.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
        "hasAttachments": n => { todoTask.hasAttachments = n.getBooleanValue(); },
        "importance": n => { todoTask.importance = n.getEnumValue<Importance>(Importance); },
        "isReminderOn": n => { todoTask.isReminderOn = n.getBooleanValue(); },
        "lastModifiedDateTime": n => { todoTask.lastModifiedDateTime = n.getDateValue(); },
        "linkedResources": n => { todoTask.linkedResources = n.getCollectionOfObjectValues<LinkedResource>(createLinkedResourceFromDiscriminatorValue); },
        "recurrence": n => { todoTask.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "reminderDateTime": n => { todoTask.reminderDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "startDateTime": n => { todoTask.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "status": n => { todoTask.status = n.getEnumValue<TaskStatus>(TaskStatus); },
        "title": n => { todoTask.title = n.getStringValue(); },
    }
}
