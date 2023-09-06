import { type GraphMobileLobAppRequestBuilderGetQueryParameters } from './graphMobileLobAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphMobileLobAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphMobileLobAppRequestBuilderGetQueryParameters | undefined;
}
