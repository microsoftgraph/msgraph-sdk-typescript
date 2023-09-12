import { type BookingCurrencyItemRequestBuilderGetQueryParameters } from './bookingCurrencyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface BookingCurrencyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BookingCurrencyItemRequestBuilderGetQueryParameters | undefined;
}
