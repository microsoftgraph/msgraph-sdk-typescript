import {B2xUserFlowsRequestBuilderGetQueryParameters} from './b2xUserFlowsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class B2xUserFlowsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: B2xUserFlowsRequestBuilderGetQueryParameters | undefined;
}
