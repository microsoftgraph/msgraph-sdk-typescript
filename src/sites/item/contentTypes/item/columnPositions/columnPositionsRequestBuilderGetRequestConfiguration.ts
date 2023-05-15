import {ColumnPositionsRequestBuilderGetQueryParameters} from './columnPositionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ColumnPositionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ColumnPositionsRequestBuilderGetQueryParameters | undefined;
}
