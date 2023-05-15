import {SectionGroupsRequestBuilderGetQueryParameters} from './sectionGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SectionGroupsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SectionGroupsRequestBuilderGetQueryParameters | undefined;
}
