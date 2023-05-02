import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserStatusesRequestBuilderPostRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
