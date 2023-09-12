import { type MasterCategoriesRequestBuilderGetQueryParameters } from './masterCategoriesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MasterCategoriesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MasterCategoriesRequestBuilderGetQueryParameters | undefined;
}
