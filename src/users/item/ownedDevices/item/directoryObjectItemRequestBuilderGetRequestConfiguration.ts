import { type DirectoryObjectItemRequestBuilderGetQueryParameters } from './directoryObjectItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DirectoryObjectItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DirectoryObjectItemRequestBuilderGetQueryParameters | undefined;
}
