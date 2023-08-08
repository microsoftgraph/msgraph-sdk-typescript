import {BookingBusinessItemRequestBuilderGetQueryParameters} from './bookingBusinessItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface BookingBusinessItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BookingBusinessItemRequestBuilderGetQueryParameters | undefined;
}
