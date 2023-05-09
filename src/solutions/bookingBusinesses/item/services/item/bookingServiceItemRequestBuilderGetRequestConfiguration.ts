import {BookingServiceItemRequestBuilderGetQueryParameters} from './bookingServiceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingServiceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: BookingServiceItemRequestBuilderGetQueryParameters | undefined;
}
