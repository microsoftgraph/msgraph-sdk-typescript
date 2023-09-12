import { type PhoneMethodsRequestBuilderGetQueryParameters } from './phoneMethodsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PhoneMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PhoneMethodsRequestBuilderGetQueryParameters | undefined;
}
