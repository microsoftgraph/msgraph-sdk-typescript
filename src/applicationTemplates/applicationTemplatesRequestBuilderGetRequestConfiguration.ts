import {ApplicationTemplatesRequestBuilderGetQueryParameters} from './applicationTemplatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ApplicationTemplatesRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ApplicationTemplatesRequestBuilderGetQueryParameters | undefined;
}
