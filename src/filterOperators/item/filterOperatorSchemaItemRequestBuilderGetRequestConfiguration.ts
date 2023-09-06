import { type FilterOperatorSchemaItemRequestBuilderGetQueryParameters } from './filterOperatorSchemaItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface FilterOperatorSchemaItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FilterOperatorSchemaItemRequestBuilderGetQueryParameters | undefined;
}
