import { type ScheduledActionConfigurationsRequestBuilderGetQueryParameters } from './scheduledActionConfigurationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ScheduledActionConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ScheduledActionConfigurationsRequestBuilderGetQueryParameters | undefined;
}
