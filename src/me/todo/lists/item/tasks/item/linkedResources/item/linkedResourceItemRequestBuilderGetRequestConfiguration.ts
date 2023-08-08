import {LinkedResourceItemRequestBuilderGetQueryParameters} from './linkedResourceItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface LinkedResourceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LinkedResourceItemRequestBuilderGetQueryParameters | undefined;
}
