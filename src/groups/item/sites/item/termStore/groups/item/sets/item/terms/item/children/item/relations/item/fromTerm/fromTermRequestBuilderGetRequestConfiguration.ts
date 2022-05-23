import {FromTermRequestBuilderGetQueryParameters} from './fromTermRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FromTermRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:FromTermRequestBuilderGetQueryParameters | undefined;
}
