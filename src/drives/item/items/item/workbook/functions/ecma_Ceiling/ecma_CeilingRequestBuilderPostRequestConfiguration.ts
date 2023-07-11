import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Ecma_CeilingRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
