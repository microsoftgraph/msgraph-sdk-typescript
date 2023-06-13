import {FilterOperatorSchemaItemRequestBuilderGetQueryParameters} from './filterOperatorSchemaItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface FilterOperatorSchemaItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: FilterOperatorSchemaItemRequestBuilderGetQueryParameters | undefined;
}
