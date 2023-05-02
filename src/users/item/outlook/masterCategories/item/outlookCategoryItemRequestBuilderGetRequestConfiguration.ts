import {OutlookCategoryItemRequestBuilderGetQueryParameters} from './outlookCategoryItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OutlookCategoryItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: OutlookCategoryItemRequestBuilderGetQueryParameters | undefined;
}
