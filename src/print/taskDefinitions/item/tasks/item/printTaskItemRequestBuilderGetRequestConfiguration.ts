import {PrintTaskItemRequestBuilderGetQueryParameters} from './printTaskItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintTaskItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:PrintTaskItemRequestBuilderGetQueryParameters | undefined;
}
