import {ManagedAppStatusItemRequestBuilderGetQueryParameters} from './managedAppStatusItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedAppStatusItemRequestBuilderGetQueryParameters | undefined;
}
