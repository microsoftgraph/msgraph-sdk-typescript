import { type ConnectionOperationItemRequestBuilderGetQueryParameters } from './connectionOperationItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ConnectionOperationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ConnectionOperationItemRequestBuilderGetQueryParameters | undefined;
}
