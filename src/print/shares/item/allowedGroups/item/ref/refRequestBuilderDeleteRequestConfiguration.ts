import { type RefRequestBuilderDeleteQueryParameters } from './refRequestBuilderDeleteQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface RefRequestBuilderDeleteRequestConfiguration {
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
    queryParameters?: RefRequestBuilderDeleteQueryParameters | undefined;
}
