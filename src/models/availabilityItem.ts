import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import type {DateTimeTimeZone} from './dateTimeTimeZone';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AvailabilityItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endDateTime property
     */
    endDateTime?: DateTimeTimeZone | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates the service ID in case of 1:n appointments. If the appointment is of type 1:n, this field will be present, otherwise, null.
     */
    serviceId?: string | undefined;
    /**
     * The startDateTime property
     */
    startDateTime?: DateTimeTimeZone | undefined;
    /**
     * The status of the staff member. Possible values are: available, busy, slotsAvailable, outOfOffice, unknownFutureValue.
     */
    status?: BookingsAvailabilityStatus | undefined;
}
