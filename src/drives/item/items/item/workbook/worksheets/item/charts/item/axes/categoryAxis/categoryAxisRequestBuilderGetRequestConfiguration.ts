import { type CategoryAxisRequestBuilderGetQueryParameters } from './categoryAxisRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface CategoryAxisRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CategoryAxisRequestBuilderGetQueryParameters | undefined;
}
