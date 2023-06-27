import {ItemBody} from './itemBody';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateMessageViewpoint} from './serviceUpdateMessageViewpoint';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUpdateMessage extends Parsable, ServiceAnnouncementBase {
    /**
     * The expected deadline of the action for the message.
     */
    actionRequiredByDateTime?: Date | undefined;
    /**
     * A collection of serviceAnnouncementAttachments.
     */
    attachments?: ServiceAnnouncementAttachment[] | undefined;
    /**
     * The zip file that contains all attachments for a message.
     */
    attachmentsArchive?: string | undefined;
    /**
     * The body property
     */
    body?: ItemBody | undefined;
    /**
     * The category property
     */
    category?: ServiceUpdateCategory | undefined;
    /**
     * Indicates whether the message has any attachment.
     */
    hasAttachments?: boolean | undefined;
    /**
     * Indicates whether the message describes a major update for the service.
     */
    isMajorChange?: boolean | undefined;
    /**
     * The affected services by the service message.
     */
    services?: string[] | undefined;
    /**
     * The severity property
     */
    severity?: ServiceUpdateSeverity | undefined;
    /**
     * A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on.
     */
    tags?: string[] | undefined;
    /**
     * Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions.
     */
    viewPoint?: ServiceUpdateMessageViewpoint | undefined;
}
