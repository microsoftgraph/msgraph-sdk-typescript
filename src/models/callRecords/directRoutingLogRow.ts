import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DirectRoutingLogRow extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Number of the user or bot who received the call. E.164 format, but may include additional data.
     */
    calleeNumber?: string | undefined;
    /**
     * In addition to the SIP codes, Microsoft has own subcodes that indicate the specific issue.
     */
    callEndSubReason?: number | undefined;
    /**
     * Number of the user or bot who made the call. E.164 format, but may include additional data.
     */
    callerNumber?: string | undefined;
    /**
     * Call type and direction.
     */
    callType?: string | undefined;
    /**
     * Identifier for the call that you can use when calling Microsoft Support. GUID.
     */
    correlationId?: string | undefined;
    /**
     * Duration of the call in seconds.
     */
    duration?: number | undefined;
    /**
     * Only exists for successful (fully established) calls. Time when call ended.
     */
    endDateTime?: Date | undefined;
    /**
     * Only exists for failed (not fully established) calls.
     */
    failureDateTime?: Date | undefined;
    /**
     * The code with which the call ended, RFC 3261.
     */
    finalSipCode?: number | undefined;
    /**
     * Description of the SIP code and Microsoft subcode.
     */
    finalSipCodePhrase?: string | undefined;
    /**
     * Unique call identifier. GUID.
     */
    id?: string | undefined;
    /**
     * When the initial invite was sent.
     */
    inviteDateTime?: Date | undefined;
    /**
     * Indicates if the trunk was enabled for media bypass or not.
     */
    mediaBypassEnabled?: boolean | undefined;
    /**
     * The datacenter used for media path in non-bypass call.
     */
    mediaPathLocation?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The datacenter used for signaling for both bypass and non-bypass calls.
     */
    signalingLocation?: string | undefined;
    /**
     * Call start time.For failed and unanswered calls, this can be equal to invite or failure time.
     */
    startDateTime?: Date | undefined;
    /**
     * Success or attempt.
     */
    successfulCall?: boolean | undefined;
    /**
     * Fully qualified domain name of the session border controller.
     */
    trunkFullyQualifiedDomainName?: string | undefined;
    /**
     * Display name of the user.
     */
    userDisplayName?: string | undefined;
    /**
     * Calling user's ID in Graph. This and other user info will be null/empty for bot call types. GUID.
     */
    userId?: string | undefined;
    /**
     * UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address.
     */
    userPrincipalName?: string | undefined;
}
