import {ManagedEBookItemRequestBuilderGetQueryParameters} from './managedEBookItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedEBookItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ManagedEBookItemRequestBuilderGetQueryParameters | undefined;
}
