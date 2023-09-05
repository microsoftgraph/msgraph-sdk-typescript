import { type GraphServicePrincipalRequestBuilderGetQueryParameters } from './graphServicePrincipalRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphServicePrincipalRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphServicePrincipalRequestBuilderGetQueryParameters | undefined;
}
