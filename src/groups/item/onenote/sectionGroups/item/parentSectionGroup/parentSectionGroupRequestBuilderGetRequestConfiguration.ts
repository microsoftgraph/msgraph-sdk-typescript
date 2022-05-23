import {ParentSectionGroupRequestBuilderGetQueryParameters} from './parentSectionGroupRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ParentSectionGroupRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:ParentSectionGroupRequestBuilderGetQueryParameters | undefined;
}
