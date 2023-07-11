import {CreatedByUserRequestBuilderGetQueryParameters} from './createdByUserRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CreatedByUserRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CreatedByUserRequestBuilderGetQueryParameters | undefined;
}
