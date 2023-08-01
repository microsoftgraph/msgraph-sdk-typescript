import {PstnCallDurationSource} from './pstnCallDurationSource';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PstnCallLogRow extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The source of the call duration data. If the call uses a third-party telecommunications operator via the Operator Connect Program, the operator may provide their own call duration data. In this case, the property value is operator. Otherwise, the value is microsoft.
     */
    callDurationSource?: PstnCallDurationSource | undefined;
    /**
     * Number dialed in E.164 format.
     */
    calleeNumber?: string | undefined;
    /**
     * Number that received the call for inbound calls or the number dialed for outbound calls. E.164 format.
     */
    callerNumber?: string | undefined;
    /**
     * Call identifier. Not guaranteed to be unique.
     */
    callId?: string | undefined;
    /**
     * Whether the call was a PSTN outbound or inbound call and the type of call such as a call placed by a user or an audio conference.
     */
    callType?: string | undefined;
    /**
     * Amount of money or cost of the call that is charged to your account.
     */
    charge?: number | undefined;
    /**
     * ID of the audio conference.
     */
    conferenceId?: string | undefined;
    /**
     * Connection fee price.
     */
    connectionCharge?: number | undefined;
    /**
     * Type of currency used to calculate the cost of the call. For details, see (ISO 4217.
     */
    currency?: string | undefined;
    /**
     * Whether the call was domestic (within a country or region) or international (outside a country or region) based on the user's location.
     */
    destinationContext?: string | undefined;
    /**
     * Country or region dialed.
     */
    destinationName?: string | undefined;
    /**
     * How long the call was connected, in seconds.
     */
    duration?: number | undefined;
    /**
     * Call end time.
     */
    endDateTime?: Date | undefined;
    /**
     * Unique call identifier. GUID.
     */
    id?: string | undefined;
    /**
     * User's phone number type, such as a service of toll-free number.
     */
    inventoryType?: string | undefined;
    /**
     * The license used for the call.
     */
    licenseCapability?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The telecommunications operator which provided PSTN services for this call. This may be Microsoft, or it may be a third-party operator via the Operator Connect Program.
     */
    operator?: string | undefined;
    /**
     * Call start time.
     */
    startDateTime?: Date | undefined;
    /**
     * Country code of the tenant. For details, see ISO 3166-1 alpha-2.
     */
    tenantCountryCode?: string | undefined;
    /**
     * Country code of the user. For details, see ISO 3166-1 alpha-2.
     */
    usageCountryCode?: string | undefined;
    /**
     * Display name of the user.
     */
    userDisplayName?: string | undefined;
    /**
     * Calling user's ID in Graph. GUID. This and other user info will be null/empty for bot call types (ucapin, ucapout).
     */
    userId?: string | undefined;
    /**
     * The user principal name (sign-in name) in Azure Active Directory. This is usually the same as the user's SIP address, and can be same as the user's e-mail address.
     */
    userPrincipalName?: string | undefined;
}
