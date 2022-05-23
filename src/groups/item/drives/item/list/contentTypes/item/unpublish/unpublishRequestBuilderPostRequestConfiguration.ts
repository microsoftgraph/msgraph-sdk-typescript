import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UnpublishRequestBuilderPostRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
