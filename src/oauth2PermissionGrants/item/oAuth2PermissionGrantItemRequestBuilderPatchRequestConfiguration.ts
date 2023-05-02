import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OAuth2PermissionGrantItemRequestBuilderPatchRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
}
