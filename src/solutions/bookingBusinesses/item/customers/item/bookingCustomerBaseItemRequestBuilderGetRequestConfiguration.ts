import { type BookingCustomerBaseItemRequestBuilderGetQueryParameters } from './bookingCustomerBaseItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface BookingCustomerBaseItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: BookingCustomerBaseItemRequestBuilderGetQueryParameters | undefined;
}
