import {GraphMobileLobAppRequestBuilderGetQueryParameters} from './graphMobileLobAppRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphMobileLobAppRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: GraphMobileLobAppRequestBuilderGetQueryParameters | undefined;
}
