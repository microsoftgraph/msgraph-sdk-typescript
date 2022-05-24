import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OutlookRequestBuilderPatchRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
