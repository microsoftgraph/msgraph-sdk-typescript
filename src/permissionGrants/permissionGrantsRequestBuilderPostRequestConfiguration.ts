import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PermissionGrantsRequestBuilderPostRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
