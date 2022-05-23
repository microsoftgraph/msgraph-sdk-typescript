import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SiteItemRequestBuilderPatchRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
