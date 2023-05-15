import {PhoneMethodsRequestBuilderGetQueryParameters} from './phoneMethodsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PhoneMethodsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PhoneMethodsRequestBuilderGetQueryParameters | undefined;
}
