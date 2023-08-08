import {SecureScoreItemRequestBuilderGetQueryParameters} from './secureScoreItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecureScoreItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SecureScoreItemRequestBuilderGetQueryParameters | undefined;
}
