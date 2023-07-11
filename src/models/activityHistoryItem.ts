import {Entity} from './entity';
import {Status} from './status';
import {UserActivity} from './userActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityHistoryItem extends Entity, Parsable {
    /**
     * Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and lastActiveDateTime.
     */
    activeDurationSeconds?: number | undefined;
    /**
     * The activity property
     */
    activity?: UserActivity | undefined;
    /**
     * Set by the server. DateTime in UTC when the object was created on the server.
     */
    createdDateTime?: Date | undefined;
    /**
     * Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
     */
    expirationDateTime?: Date | undefined;
    /**
     * Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null, historyItem status should be Ongoing.
     */
    lastActiveDateTime?: Date | undefined;
    /**
     * Set by the server. DateTime in UTC when the object was modified on the server.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
     */
    startedDateTime?: Date | undefined;
    /**
     * Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
     */
    status?: Status | undefined;
    /**
     * Optional. The timezone in which the user's device used to generate the activity was located at activity creation time. Values supplied as Olson IDs in order to support cross-platform representation.
     */
    userTimezone?: string | undefined;
}
