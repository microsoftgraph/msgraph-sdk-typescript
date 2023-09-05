import { type GetActivitiesByIntervalRequestBuilderGetQueryParameters } from './getActivitiesByIntervalRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
