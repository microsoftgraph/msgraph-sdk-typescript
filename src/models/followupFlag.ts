import {DateTimeTimeZone} from './dateTimeTimeZone';
import {FollowupFlagStatus} from './followupFlagStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FollowupFlag extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The date and time that the follow-up was finished.
     */
    completedDateTime?: DateTimeTimeZone | undefined;
    /**
     * The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the startDateTime; otherwise, you will get a 400 Bad Request response.
     */
    dueDateTime?: DateTimeTimeZone | undefined;
    /**
     * The status for follow-up for an item. Possible values are notFlagged, complete, and flagged.
     */
    flagStatus?: FollowupFlagStatus | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The date and time that the follow-up is to begin.
     */
    startDateTime?: DateTimeTimeZone | undefined;
}
