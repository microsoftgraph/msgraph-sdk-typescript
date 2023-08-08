import {ExecutionScopeRequestBuilderGetQueryParameters} from './executionScopeRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExecutionScopeRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ExecutionScopeRequestBuilderGetQueryParameters | undefined;
}
