import {ScheduledActionConfigurationsRequestBuilderGetQueryParameters} from './scheduledActionConfigurationsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
