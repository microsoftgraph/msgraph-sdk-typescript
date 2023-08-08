import {ManagedMobileAppItemRequestBuilderGetQueryParameters} from './managedMobileAppItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedMobileAppItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedMobileAppItemRequestBuilderGetQueryParameters | undefined;
}
