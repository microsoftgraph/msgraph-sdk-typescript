import { type DeltaWithTokenRequestBuilderGetQueryParameters } from './deltaWithTokenRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
