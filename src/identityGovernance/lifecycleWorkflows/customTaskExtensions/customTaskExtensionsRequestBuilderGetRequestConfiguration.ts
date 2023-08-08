import {CustomTaskExtensionsRequestBuilderGetQueryParameters} from './customTaskExtensionsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CustomTaskExtensionsRequestBuilderGetQueryParameters | undefined;
}
