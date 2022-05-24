import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ManagedEBooksRequestBuilderPostRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
}
