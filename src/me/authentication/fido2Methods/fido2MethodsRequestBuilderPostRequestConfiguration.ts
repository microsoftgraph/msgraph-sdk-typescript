import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Fido2MethodsRequestBuilderPostRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
