import {PostFederationSignupRequestBuilderGetQueryParameters} from './postFederationSignupRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface PostFederationSignupRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PostFederationSignupRequestBuilderGetQueryParameters | undefined;
}
