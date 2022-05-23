import {SourceColumnRequestBuilderGetQueryParameters} from './sourceColumnRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SourceColumnRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SourceColumnRequestBuilderGetQueryParameters | undefined;
}
