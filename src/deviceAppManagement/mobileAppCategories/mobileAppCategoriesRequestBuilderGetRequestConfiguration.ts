import {MobileAppCategoriesRequestBuilderGetQueryParameters} from './mobileAppCategoriesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppCategoriesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MobileAppCategoriesRequestBuilderGetQueryParameters | undefined;
}
