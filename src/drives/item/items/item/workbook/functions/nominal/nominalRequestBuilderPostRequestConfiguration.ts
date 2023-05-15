import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NominalRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
