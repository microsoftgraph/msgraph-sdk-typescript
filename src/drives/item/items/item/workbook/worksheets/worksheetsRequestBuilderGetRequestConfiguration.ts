import {WorksheetsRequestBuilderGetQueryParameters} from './worksheetsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorksheetsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: WorksheetsRequestBuilderGetQueryParameters | undefined;
}
