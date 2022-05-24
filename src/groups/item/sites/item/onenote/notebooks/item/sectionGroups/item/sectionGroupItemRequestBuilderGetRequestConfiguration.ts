import {SectionGroupItemRequestBuilderGetQueryParameters} from './sectionGroupItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SectionGroupItemRequestBuilderGetRequestConfiguration{
    /** Request headers */
    headers?:Record<string, string> | undefined;
    /** Request options */
    options?:RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?:SectionGroupItemRequestBuilderGetQueryParameters | undefined;
}
