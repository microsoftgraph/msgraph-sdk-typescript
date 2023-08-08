import {SectionGroupsRequestBuilderGetQueryParameters} from './sectionGroupsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface SectionGroupsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: SectionGroupsRequestBuilderGetQueryParameters | undefined;
}
