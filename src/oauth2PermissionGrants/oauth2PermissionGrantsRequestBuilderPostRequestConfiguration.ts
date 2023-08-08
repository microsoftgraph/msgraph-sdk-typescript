import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface Oauth2PermissionGrantsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
}
