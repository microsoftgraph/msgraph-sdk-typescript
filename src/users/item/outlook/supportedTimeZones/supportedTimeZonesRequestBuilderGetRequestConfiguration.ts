import { type SupportedTimeZonesRequestBuilderGetQueryParameters } from './supportedTimeZonesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
