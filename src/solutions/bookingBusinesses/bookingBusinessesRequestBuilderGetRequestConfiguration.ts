import { type BookingBusinessesRequestBuilderGetQueryParameters } from './bookingBusinessesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface BookingBusinessesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BookingBusinessesRequestBuilderGetQueryParameters | undefined;
}
