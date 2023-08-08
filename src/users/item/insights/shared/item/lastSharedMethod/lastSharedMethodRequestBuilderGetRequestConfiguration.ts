import {LastSharedMethodRequestBuilderGetQueryParameters} from './lastSharedMethodRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface LastSharedMethodRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LastSharedMethodRequestBuilderGetQueryParameters | undefined;
}
