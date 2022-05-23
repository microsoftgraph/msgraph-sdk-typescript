import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {ExternalAudienceScope} from './externalAudienceScope';

export interface AutomaticRepliesSetting{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. Possible values are: none, contactsOnly, all. */
    externalAudience?:ExternalAudienceScope | undefined;
    /** The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled. */
    externalReplyMessage?:string | undefined;
    /** The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled. */
    internalReplyMessage?:string | undefined;
    /** The date and time that automatic replies are set to end, if Status is set to Scheduled. */
    scheduledEndDateTime?:DateTimeTimeZone | undefined;
    /** The date and time that automatic replies are set to begin, if Status is set to Scheduled. */
    scheduledStartDateTime?:DateTimeTimeZone | undefined;
    /** Configurations status for automatic replies. Possible values are: disabled, alwaysEnabled, scheduled. */
    status?:AutomaticRepliesStatus | undefined;
}
