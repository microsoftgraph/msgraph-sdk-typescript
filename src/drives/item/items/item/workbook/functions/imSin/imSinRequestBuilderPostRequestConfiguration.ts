import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ImSinRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
