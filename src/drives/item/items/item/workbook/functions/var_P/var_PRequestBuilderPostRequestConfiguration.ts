import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Var_PRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
