import {BookingAppointmentItemRequestBuilderGetQueryParameters} from './bookingAppointmentItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingAppointmentItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: BookingAppointmentItemRequestBuilderGetQueryParameters | undefined;
}
