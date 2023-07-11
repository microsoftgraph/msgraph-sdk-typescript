import {ActivatedUsingRequestBuilderGetQueryParameters} from './activatedUsingRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ActivatedUsingRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ActivatedUsingRequestBuilderGetQueryParameters | undefined;
}
