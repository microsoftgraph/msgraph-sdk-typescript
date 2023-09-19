import { type GraphIosStoreAppRequestBuilderGetQueryParameters } from './graphIosStoreAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphIosStoreAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphIosStoreAppRequestBuilderGetQueryParameters | undefined;
}
