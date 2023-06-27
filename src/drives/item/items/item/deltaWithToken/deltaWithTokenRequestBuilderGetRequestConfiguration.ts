import {DeltaWithTokenRequestBuilderGetQueryParameters} from './deltaWithTokenRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeltaWithTokenRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeltaWithTokenRequestBuilderGetQueryParameters | undefined;
}
