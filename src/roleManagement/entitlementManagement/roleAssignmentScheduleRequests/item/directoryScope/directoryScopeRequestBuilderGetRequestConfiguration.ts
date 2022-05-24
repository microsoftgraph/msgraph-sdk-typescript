import {DirectoryScopeRequestBuilderGetQueryParameters} from './directoryScopeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DirectoryScopeRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:DirectoryScopeRequestBuilderGetQueryParameters | undefined;
}
