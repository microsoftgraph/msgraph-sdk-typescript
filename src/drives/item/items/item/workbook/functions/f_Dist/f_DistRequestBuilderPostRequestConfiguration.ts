import {RequestOption} from '@microsoft/kiota-abstractions';

export interface F_DistRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
