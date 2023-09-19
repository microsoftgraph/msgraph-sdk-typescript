import { type GraphIosVppAppRequestBuilderGetQueryParameters } from './graphIosVppAppRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphIosVppAppRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphIosVppAppRequestBuilderGetQueryParameters | undefined;
}
