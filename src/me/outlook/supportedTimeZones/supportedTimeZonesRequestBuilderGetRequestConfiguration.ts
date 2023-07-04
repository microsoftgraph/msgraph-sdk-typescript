import {SupportedTimeZonesRequestBuilderGetQueryParameters} from './supportedTimeZonesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SupportedTimeZonesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SupportedTimeZonesRequestBuilderGetQueryParameters | undefined;
}
