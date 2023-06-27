import {GraphManagedMobileLobAppRequestBuilderGetQueryParameters} from './graphManagedMobileLobAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphManagedMobileLobAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphManagedMobileLobAppRequestBuilderGetQueryParameters | undefined;
}
