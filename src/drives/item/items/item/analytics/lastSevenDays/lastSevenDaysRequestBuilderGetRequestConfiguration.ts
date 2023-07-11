import {LastSevenDaysRequestBuilderGetQueryParameters} from './lastSevenDaysRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastSevenDaysRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LastSevenDaysRequestBuilderGetQueryParameters | undefined;
}
