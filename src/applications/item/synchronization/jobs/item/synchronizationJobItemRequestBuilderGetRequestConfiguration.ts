import {SynchronizationJobItemRequestBuilderGetQueryParameters} from './synchronizationJobItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface SynchronizationJobItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SynchronizationJobItemRequestBuilderGetQueryParameters | undefined;
}
