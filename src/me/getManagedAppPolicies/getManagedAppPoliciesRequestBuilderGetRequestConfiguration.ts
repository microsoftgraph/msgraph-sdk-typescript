import {GetManagedAppPoliciesRequestBuilderGetQueryParameters} from './getManagedAppPoliciesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GetManagedAppPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetManagedAppPoliciesRequestBuilderGetQueryParameters | undefined;
}
