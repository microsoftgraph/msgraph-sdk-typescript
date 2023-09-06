import { type NamedLocationItemRequestBuilderGetQueryParameters } from './namedLocationItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface NamedLocationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: NamedLocationItemRequestBuilderGetQueryParameters | undefined;
}
