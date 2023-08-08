import {MinorGridlinesRequestBuilderGetQueryParameters} from './minorGridlinesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface MinorGridlinesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MinorGridlinesRequestBuilderGetQueryParameters | undefined;
}
