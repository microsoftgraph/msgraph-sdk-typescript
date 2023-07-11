import {GetActivitiesByIntervalRequestBuilderGetQueryParameters} from './getActivitiesByIntervalRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GetActivitiesByIntervalRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetActivitiesByIntervalRequestBuilderGetQueryParameters | undefined;
}
