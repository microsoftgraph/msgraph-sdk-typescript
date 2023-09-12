import { type B2xUserFlowsRequestBuilderGetQueryParameters } from './b2xUserFlowsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface B2xUserFlowsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: B2xUserFlowsRequestBuilderGetQueryParameters | undefined;
}
