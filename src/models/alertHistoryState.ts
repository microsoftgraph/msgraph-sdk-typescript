import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';

export interface AlertHistoryState{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The Application ID of the calling application that submitted an update (PATCH) to the alert. The appId should be extracted from the auth token and not entered manually by the calling application. */
    appId?:string | undefined;
    /** UPN of user the alert was assigned to (note: alert.assignedTo only stores the last value/UPN). */
    assignedTo?:string | undefined;
    /** Comment entered by signed-in user. */
    comments?:string[] | undefined;
    /** Analyst feedback on the alert in this update. Possible values are: unknown, truePositive, falsePositive, benignPositive. */
    feedback?:AlertFeedback | undefined;
    /** Alert status value (if updated). Possible values are: unknown, newAlert, inProgress, resolved, dismissed. */
    status?:AlertStatus | undefined;
    /** Date and time of the alert update. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    updatedDateTime?:Date | undefined;
    /** UPN of the signed-in user that updated the alert (taken from the bearer token - if in user/delegated auth mode). */
    user?:string | undefined;
}
