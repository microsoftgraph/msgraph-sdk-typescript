import { type TransitiveMembersRequestBuilderGetQueryParameters } from './transitiveMembersRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface TransitiveMembersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TransitiveMembersRequestBuilderGetQueryParameters | undefined;
}
