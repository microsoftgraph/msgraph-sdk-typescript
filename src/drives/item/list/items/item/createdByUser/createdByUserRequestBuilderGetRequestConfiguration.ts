import { type CreatedByUserRequestBuilderGetQueryParameters } from './createdByUserRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
