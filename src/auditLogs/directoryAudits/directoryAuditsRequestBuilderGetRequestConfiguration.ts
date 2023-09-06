import { type DirectoryAuditsRequestBuilderGetQueryParameters } from './directoryAuditsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface DirectoryAuditsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DirectoryAuditsRequestBuilderGetQueryParameters | undefined;
}
