import { type GraphManagedIOSLobAppRequestBuilderGetQueryParameters } from './graphManagedIOSLobAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphManagedIOSLobAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphManagedIOSLobAppRequestBuilderGetQueryParameters | undefined;
}
