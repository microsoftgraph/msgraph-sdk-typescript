import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PoliciesRequestBuilderPatchRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
