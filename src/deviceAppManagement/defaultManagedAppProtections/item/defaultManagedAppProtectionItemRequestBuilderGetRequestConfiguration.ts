import {DefaultManagedAppProtectionItemRequestBuilderGetQueryParameters} from './defaultManagedAppProtectionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DefaultManagedAppProtectionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DefaultManagedAppProtectionItemRequestBuilderGetQueryParameters | undefined;
}
