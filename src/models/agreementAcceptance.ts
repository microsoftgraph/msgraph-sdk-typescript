import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {Entity} from './entity';

export interface AgreementAcceptance extends Entity{
    /** ID of the agreement file accepted by the user. */
    agreementFileId?:string | undefined;
    /** ID of the agreement. */
    agreementId?:string | undefined;
    /** The display name of the device used for accepting the agreement. */
    deviceDisplayName?:string | undefined;
    /** The unique identifier of the device used for accepting the agreement. */
    deviceId?:string | undefined;
    /** The operating system used for accepting the agreement. */
    deviceOSType?:string | undefined;
    /** The operating system version of the device used for accepting the agreement. */
    deviceOSVersion?:string | undefined;
    /** The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    expirationDateTime?:Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    recordedDateTime?:Date | undefined;
    /** Possible values are: accepted, declined. Supports $filter (eq). */
    state?:AgreementAcceptanceState | undefined;
    /** Display name of the user when the acceptance was recorded. */
    userDisplayName?:string | undefined;
    /** Email of the user when the acceptance was recorded. */
    userEmail?:string | undefined;
    /** ID of the user who accepted the agreement. */
    userId?:string | undefined;
    /** UPN of the user when the acceptance was recorded. */
    userPrincipalName?:string | undefined;
}
