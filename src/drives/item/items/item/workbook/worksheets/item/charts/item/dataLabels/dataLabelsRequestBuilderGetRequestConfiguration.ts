import {DataLabelsRequestBuilderGetQueryParameters} from './dataLabelsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DataLabelsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DataLabelsRequestBuilderGetQueryParameters | undefined;
}
