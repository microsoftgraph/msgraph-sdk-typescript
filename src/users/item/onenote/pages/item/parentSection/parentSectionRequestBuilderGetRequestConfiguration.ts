import {ParentSectionRequestBuilderGetQueryParameters} from './parentSectionRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParentSectionRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ParentSectionRequestBuilderGetQueryParameters | undefined;
}
