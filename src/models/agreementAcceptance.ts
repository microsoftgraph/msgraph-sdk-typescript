import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementAcceptance extends Entity, Parsable {
    /**
     * The identifier of the agreement file accepted by the user.
     */
    agreementFileId?: string | undefined;
    /**
     * The identifier of the agreement.
     */
    agreementId?: string | undefined;
    /**
     * The display name of the device used for accepting the agreement.
     */
    deviceDisplayName?: string | undefined;
    /**
     * The unique identifier of the device used for accepting the agreement. Supports $filter (eq) and eq for null values.
     */
    deviceId?: string | undefined;
    /**
     * The operating system used to accept the agreement.
     */
    deviceOSType?: string | undefined;
    /**
     * The operating system version of the device used to accept the agreement.
     */
    deviceOSVersion?: string | undefined;
    /**
     * The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ge, le) and eq for null values.
     */
    expirationDateTime?: Date | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    recordedDateTime?: Date | undefined;
    /**
     * The state of the agreement acceptance. Possible values are: accepted, declined. Supports $filter (eq).
     */
    state?: AgreementAcceptanceState | undefined;
    /**
     * Display name of the user when the acceptance was recorded.
     */
    userDisplayName?: string | undefined;
    /**
     * Email of the user when the acceptance was recorded.
     */
    userEmail?: string | undefined;
    /**
     * The identifier of the user who accepted the agreement. Supports $filter (eq).
     */
    userId?: string | undefined;
    /**
     * UPN of the user when the acceptance was recorded.
     */
    userPrincipalName?: string | undefined;
}
