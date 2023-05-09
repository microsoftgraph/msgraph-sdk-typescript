import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Oct2DecRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
