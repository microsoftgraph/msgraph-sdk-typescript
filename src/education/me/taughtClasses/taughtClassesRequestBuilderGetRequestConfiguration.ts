import {TaughtClassesRequestBuilderGetQueryParameters} from './taughtClassesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TaughtClassesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:TaughtClassesRequestBuilderGetQueryParameters | undefined;
}
