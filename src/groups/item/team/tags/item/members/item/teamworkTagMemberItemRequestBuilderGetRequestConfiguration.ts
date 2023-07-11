import {TeamworkTagMemberItemRequestBuilderGetQueryParameters} from './teamworkTagMemberItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamworkTagMemberItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TeamworkTagMemberItemRequestBuilderGetQueryParameters | undefined;
}
