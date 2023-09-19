import { type GraphWin32LobAppRequestBuilderGetQueryParameters } from './graphWin32LobAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphWin32LobAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphWin32LobAppRequestBuilderGetQueryParameters | undefined;
}
