import { type CombinationConfigurationsRequestBuilderGetQueryParameters } from './combinationConfigurationsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CombinationConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CombinationConfigurationsRequestBuilderGetQueryParameters | undefined;
}
