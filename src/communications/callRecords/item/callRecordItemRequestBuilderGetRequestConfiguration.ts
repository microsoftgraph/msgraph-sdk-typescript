import {CallRecordItemRequestBuilderGetQueryParameters} from './callRecordItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CallRecordItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: CallRecordItemRequestBuilderGetQueryParameters | undefined;
}
