import {PrintTaskDefinitionItemRequestBuilderGetQueryParameters} from './printTaskDefinitionItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintTaskDefinitionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PrintTaskDefinitionItemRequestBuilderGetQueryParameters | undefined;
}
