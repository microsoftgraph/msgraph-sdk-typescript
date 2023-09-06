import { type AvailableProviderTypesRequestBuilderGetQueryParameters } from './availableProviderTypesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AvailableProviderTypesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AvailableProviderTypesRequestBuilderGetQueryParameters | undefined;
}
