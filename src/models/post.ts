import {Attachment} from './attachment';
import {Extension} from './extension';
import {ItemBody} from './itemBody';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {OutlookItem} from './outlookItem';
import {Recipient} from './recipient';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Post extends OutlookItem, Parsable {
    /**
     * Read-only. Nullable. Supports $expand.
     */
    attachments?: Attachment[] | undefined;
    /**
     * The contents of the post. This is a default property. This property can be null.
     */
    body?: ItemBody | undefined;
    /**
     * Unique ID of the conversation. Read-only.
     */
    conversationId?: string | undefined;
    /**
     * Unique ID of the conversation thread. Read-only.
     */
    conversationThreadId?: string | undefined;
    /**
     * The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.
     */
    extensions?: Extension[] | undefined;
    /**
     * The from property
     */
    from?: Recipient | undefined;
    /**
     * Indicates whether the post has at least one attachment. This is a default property.
     */
    hasAttachments?: boolean | undefined;
    /**
     * Read-only. Supports $expand.
     */
    inReplyTo?: Post | undefined;
    /**
     * The collection of multi-value extended properties defined for the post. Read-only. Nullable.
     */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /**
     * Conversation participants that were added to the thread as part of this post.
     */
    newParticipants?: Recipient[] | undefined;
    /**
     * Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    receivedDateTime?: Date | undefined;
    /**
     * Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
     */
    sender?: Recipient | undefined;
    /**
     * The collection of single-value extended properties defined for the post. Read-only. Nullable.
     */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
}
