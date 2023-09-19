import { type GraphMacOSLobAppRequestBuilderGetQueryParameters } from './graphMacOSLobAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphMacOSLobAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphMacOSLobAppRequestBuilderGetQueryParameters | undefined;
}
