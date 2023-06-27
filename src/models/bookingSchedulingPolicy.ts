import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingSchedulingPolicy extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * True if to allow customers to choose a specific person for the booking.
     */
    allowStaffSelection?: boolean | undefined;
    /**
     * Maximum number of days in advance that a booking can be made. It follows the ISO 8601 format.
     */
    maximumAdvance?: Duration | undefined;
    /**
     * The minimum amount of time before which bookings and cancellations must be made. It follows the ISO 8601 format.
     */
    minimumLeadTime?: Duration | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * True to notify the business via email when a booking is created or changed. Use the email address specified in the email property of the bookingBusiness entity for the business.
     */
    sendConfirmationsToOwner?: boolean | undefined;
    /**
     * Duration of each time slot, denoted in ISO 8601 format.
     */
    timeSlotInterval?: Duration | undefined;
}
