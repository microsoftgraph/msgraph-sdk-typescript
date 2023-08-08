import {IntelProfilesRequestBuilderGetQueryParameters} from './intelProfilesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface IntelProfilesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IntelProfilesRequestBuilderGetQueryParameters | undefined;
}
