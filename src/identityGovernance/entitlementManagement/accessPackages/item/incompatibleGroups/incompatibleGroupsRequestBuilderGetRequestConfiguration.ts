import {IncompatibleGroupsRequestBuilderGetQueryParameters} from './incompatibleGroupsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface IncompatibleGroupsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IncompatibleGroupsRequestBuilderGetQueryParameters | undefined;
}
