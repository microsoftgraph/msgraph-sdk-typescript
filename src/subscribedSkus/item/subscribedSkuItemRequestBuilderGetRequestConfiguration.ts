import {SubscribedSkuItemRequestBuilderGetQueryParameters} from './subscribedSkuItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubscribedSkuItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SubscribedSkuItemRequestBuilderGetQueryParameters | undefined;
}
