import {GraphOrgContactRequestBuilderGetQueryParameters} from './graphOrgContactRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphOrgContactRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphOrgContactRequestBuilderGetQueryParameters | undefined;
}
