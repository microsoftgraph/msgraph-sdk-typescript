import {AttachmentBase} from './attachmentBase';
import {AttachmentSession} from './attachmentSession';
import {ChecklistItem} from './checklistItem';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Entity} from './entity';
import {Extension} from './extension';
import {Importance} from './importance';
import {ItemBody} from './itemBody';
import {LinkedResource} from './linkedResource';
import {PatternedRecurrence} from './patternedRecurrence';
import {TaskStatus} from './taskStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TodoTask extends Entity, Parsable {
    /**
     * A collection of file attachments for the task.
     */
    attachments?: AttachmentBase[] | undefined;
    /**
     * The attachmentSessions property
     */
    attachmentSessions?: AttachmentSession[] | undefined;
    /**
     * The task body that typically contains information about the task.
     */
    body?: ItemBody | undefined;
    /**
     * The date and time when the task body was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     */
    bodyLastModifiedDateTime?: Date | undefined;
    /**
     * The categories associated with the task. Each category corresponds to the displayName property of an outlookCategory that the user has defined.
     */
    categories?: string[] | undefined;
    /**
     * A collection of checklistItems linked to a task.
     */
    checklistItems?: ChecklistItem[] | undefined;
    /**
     * The date and time in the specified time zone that the task was finished.
     */
    completedDateTime?: DateTimeTimeZone | undefined;
    /**
     * The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     */
    createdDateTime?: Date | undefined;
    /**
     * The date and time in the specified time zone that the task is to be finished.
     */
    dueDateTime?: DateTimeTimeZone | undefined;
    /**
     * The collection of open extensions defined for the task. Nullable.
     */
    extensions?: Extension[] | undefined;
    /**
     * Indicates whether the task has attachments.
     */
    hasAttachments?: boolean | undefined;
    /**
     * The importance property
     */
    importance?: Importance | undefined;
    /**
     * Set to true if an alert is set to remind the user of the task.
     */
    isReminderOn?: boolean | undefined;
    /**
     * The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2020 would look like this: '2020-01-01T00:00:00Z'.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * A collection of resources linked to the task.
     */
    linkedResources?: LinkedResource[] | undefined;
    /**
     * The recurrence pattern for the task.
     */
    recurrence?: PatternedRecurrence | undefined;
    /**
     * The date and time in the specified time zone for a reminder alert of the task to occur.
     */
    reminderDateTime?: DateTimeTimeZone | undefined;
    /**
     * The date and time in the specified time zone at which the task is scheduled to start.
     */
    startDateTime?: DateTimeTimeZone | undefined;
    /**
     * The status property
     */
    status?: TaskStatus | undefined;
    /**
     * A brief description of the task.
     */
    title?: string | undefined;
}
