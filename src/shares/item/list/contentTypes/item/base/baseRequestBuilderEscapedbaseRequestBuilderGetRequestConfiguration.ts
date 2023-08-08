import {BaseRequestBuilderEscapedbaseRequestBuilderGetQueryParameters} from './baseRequestBuilderEscapedbaseRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface BaseRequestBuilderEscapedbaseRequestBuilderGetRequestConfiguration {
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
    queryParameters?: BaseRequestBuilderEscapedbaseRequestBuilderGetQueryParameters | undefined;
}
