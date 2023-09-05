import { type NoncustodialDataSourcesRequestBuilderGetQueryParameters } from './noncustodialDataSourcesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface NoncustodialDataSourcesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: NoncustodialDataSourcesRequestBuilderGetQueryParameters | undefined;
}
