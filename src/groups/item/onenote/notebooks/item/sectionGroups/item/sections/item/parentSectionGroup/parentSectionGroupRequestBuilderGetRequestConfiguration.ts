import { type ParentSectionGroupRequestBuilderGetQueryParameters } from './parentSectionGroupRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ParentSectionGroupRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ParentSectionGroupRequestBuilderGetQueryParameters | undefined;
}
