import { type GraphAndroidStoreAppRequestBuilderGetQueryParameters } from './graphAndroidStoreAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphAndroidStoreAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphAndroidStoreAppRequestBuilderGetQueryParameters | undefined;
}
