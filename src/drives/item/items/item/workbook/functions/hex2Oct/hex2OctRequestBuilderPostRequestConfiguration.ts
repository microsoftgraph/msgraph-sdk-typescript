import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Hex2OctRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
