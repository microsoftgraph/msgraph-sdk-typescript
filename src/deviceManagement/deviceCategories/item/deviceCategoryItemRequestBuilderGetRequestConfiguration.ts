import {DeviceCategoryItemRequestBuilderGetQueryParameters} from './deviceCategoryItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceCategoryItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceCategoryItemRequestBuilderGetQueryParameters | undefined;
}
