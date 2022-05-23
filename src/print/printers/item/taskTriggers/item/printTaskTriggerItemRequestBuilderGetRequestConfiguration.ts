import {PrintTaskTriggerItemRequestBuilderGetQueryParameters} from './printTaskTriggerItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PrintTaskTriggerItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:PrintTaskTriggerItemRequestBuilderGetQueryParameters | undefined;
}
