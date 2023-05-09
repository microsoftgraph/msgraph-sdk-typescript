import {MobileAppCategoryItemRequestBuilderGetQueryParameters} from './mobileAppCategoryItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface MobileAppCategoryItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: MobileAppCategoryItemRequestBuilderGetQueryParameters | undefined;
}
