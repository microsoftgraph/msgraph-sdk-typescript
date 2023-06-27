import {BookingCurrenciesRequestBuilderGetQueryParameters} from './bookingCurrenciesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingCurrenciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BookingCurrenciesRequestBuilderGetQueryParameters | undefined;
}
