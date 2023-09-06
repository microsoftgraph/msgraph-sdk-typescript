import { type ManagedAppPolicyItemRequestBuilderGetQueryParameters } from './managedAppPolicyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedAppPolicyItemRequestBuilderGetQueryParameters | undefined;
}
