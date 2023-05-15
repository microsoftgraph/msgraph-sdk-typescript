import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TrimMeanRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
