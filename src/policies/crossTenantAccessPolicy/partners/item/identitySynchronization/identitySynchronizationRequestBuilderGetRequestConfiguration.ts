import {IdentitySynchronizationRequestBuilderGetQueryParameters} from './identitySynchronizationRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface IdentitySynchronizationRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IdentitySynchronizationRequestBuilderGetQueryParameters | undefined;
}
