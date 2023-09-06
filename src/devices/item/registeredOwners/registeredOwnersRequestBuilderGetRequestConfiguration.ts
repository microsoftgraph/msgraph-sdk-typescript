import { type RegisteredOwnersRequestBuilderGetQueryParameters } from './registeredOwnersRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RegisteredOwnersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RegisteredOwnersRequestBuilderGetQueryParameters | undefined;
}
