import { type PasswordMethodsRequestBuilderGetQueryParameters } from './passwordMethodsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface PasswordMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PasswordMethodsRequestBuilderGetQueryParameters | undefined;
}
