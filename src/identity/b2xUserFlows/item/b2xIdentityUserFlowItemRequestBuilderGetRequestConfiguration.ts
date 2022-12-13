import {B2xIdentityUserFlowItemRequestBuilderGetQueryParameters} from './b2xIdentityUserFlowItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class B2xIdentityUserFlowItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: B2xIdentityUserFlowItemRequestBuilderGetQueryParameters | undefined;
}
