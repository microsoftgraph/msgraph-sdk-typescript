import {AttachmentBase} from './attachmentBase';
import {AttachmentSession} from './attachmentSession';
import {ChecklistItem} from './checklistItem';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Extension} from './extension';
import {Importance} from './importance';
import {ItemBody} from './itemBody';
import {LinkedResource} from './linkedResource';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeAttachmentBase} from './serializeAttachmentBase';
import {serializeAttachmentSession} from './serializeAttachmentSession';
import {serializeChecklistItem} from './serializeChecklistItem';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEntity} from './serializeEntity';
import {serializeExtension} from './serializeExtension';
import {serializeItemBody} from './serializeItemBody';
import {serializeLinkedResource} from './serializeLinkedResource';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {TaskStatus} from './taskStatus';
import {TodoTask} from './todoTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTask(writer: SerializationWriter, todoTask: TodoTask | undefined = {} as TodoTask) : void {
        serializeEntity(writer, todoTask)
        writer.writeCollectionOfObjectValues<AttachmentBase>("attachments", todoTask.attachments, serializeAttachmentBase);
        writer.writeCollectionOfObjectValues<AttachmentSession>("attachmentSessions", todoTask.attachmentSessions, serializeAttachmentSession);
        writer.writeObjectValue<ItemBody>("body", todoTask.body, serializeItemBody);
        writer.writeDateValue("bodyLastModifiedDateTime", todoTask.bodyLastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("categories", todoTask.categories);
        writer.writeCollectionOfObjectValues<ChecklistItem>("checklistItems", todoTask.checklistItems, serializeChecklistItem);
        writer.writeObjectValue<DateTimeTimeZone>("completedDateTime", todoTask.completedDateTime, serializeDateTimeTimeZone);
        writer.writeDateValue("createdDateTime", todoTask.createdDateTime);
        writer.writeObjectValue<DateTimeTimeZone>("dueDateTime", todoTask.dueDateTime, serializeDateTimeTimeZone);
        writer.writeCollectionOfObjectValues<Extension>("extensions", todoTask.extensions, serializeExtension);
        writer.writeBooleanValue("hasAttachments", todoTask.hasAttachments);
        writer.writeEnumValue<Importance>("importance", todoTask.importance);
        writer.writeBooleanValue("isReminderOn", todoTask.isReminderOn);
        writer.writeDateValue("lastModifiedDateTime", todoTask.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<LinkedResource>("linkedResources", todoTask.linkedResources, serializeLinkedResource);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", todoTask.recurrence, serializePatternedRecurrence);
        writer.writeObjectValue<DateTimeTimeZone>("reminderDateTime", todoTask.reminderDateTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", todoTask.startDateTime, serializeDateTimeTimeZone);
        writer.writeEnumValue<TaskStatus>("status", todoTask.status);
        writer.writeStringValue("title", todoTask.title);
}
