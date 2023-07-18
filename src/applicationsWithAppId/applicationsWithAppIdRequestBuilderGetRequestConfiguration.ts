import {ApplicationsWithAppIdRequestBuilderGetQueryParameters} from './applicationsWithAppIdRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationsWithAppIdRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ApplicationsWithAppIdRequestBuilderGetQueryParameters | undefined;
}
