import { type GraphAndroidLobAppRequestBuilderGetQueryParameters } from './graphAndroidLobAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphAndroidLobAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphAndroidLobAppRequestBuilderGetQueryParameters | undefined;
}
