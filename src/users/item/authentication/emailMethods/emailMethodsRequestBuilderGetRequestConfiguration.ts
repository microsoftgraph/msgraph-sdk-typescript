import {EmailMethodsRequestBuilderGetQueryParameters} from './emailMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface EmailMethodsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: EmailMethodsRequestBuilderGetQueryParameters | undefined;
}
