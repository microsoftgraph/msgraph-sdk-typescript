import {DataSourceItemRequestBuilderGetQueryParameters} from './dataSourceItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataSourceItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DataSourceItemRequestBuilderGetQueryParameters | undefined;
}
