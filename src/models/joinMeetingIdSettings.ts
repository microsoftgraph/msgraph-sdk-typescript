import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface JoinMeetingIdSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether a passcode is required to join a meeting when using joinMeetingId. Optional.
     */
    isPasscodeRequired?: boolean | undefined;
    /**
     * The meeting ID to be used to join a meeting. Optional. Read-only.
     */
    joinMeetingId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The passcode to join a meeting.  Optional. Read-only.
     */
    passcode?: string | undefined;
}
