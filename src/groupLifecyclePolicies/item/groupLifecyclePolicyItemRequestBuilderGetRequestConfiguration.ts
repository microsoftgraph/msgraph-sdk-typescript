import {GroupLifecyclePolicyItemRequestBuilderGetQueryParameters} from './groupLifecyclePolicyItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GroupLifecyclePolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GroupLifecyclePolicyItemRequestBuilderGetQueryParameters | undefined;
}
